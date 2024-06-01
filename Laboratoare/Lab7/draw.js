function drawTable(nrows, ncols) {
   var table = document.createElement("table");
   for (var i = 0; i < nrows; i++) {
     var row = document.createElement("tr");
     for (var j = 0; j < ncols; j++) {
       var cell = document.createElement("td");
       cell.classList.add("r" + i);
       cell.classList.add("c" + j);
       row.appendChild(cell);
     }
     table.appendChild(row);
   }
   var container = document.getElementById("container");
     container.appendChild(table);

 }
 
 
 function colorCol(column, color) {
   var cells = document.querySelectorAll(".c" + column);
 
   cells.forEach(function (cell) {
     cell.style.backgroundColor = color;
   });
 }
 
 function colorRow(row, color) {
   var cells = document.querySelectorAll(".r" + row);
   cells.forEach(function (cell) {
     cell.style.backgroundColor = color;
   });
 }
 

function rainbow(target) {
   let colors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(240, 240, 0)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)"];
   if (target === "vertical") {
      for (var i = 0; i < colors.length; i++) {
        colorCol(i, colors[i]);
      }
    } else if (target === "horizontal") {
      colorRow(0, colors[0]);
      for (var i = 1; i < colors.length; i++) {
        colorRow(i, colors[i]);
      }
    }
}
function getNthChild(element, n) {
  var children = element.children;

  if (n >= 1 && n <= children.length) {
    return children[n - 1];
  } 
  else {
    return null;
  }
}

function drawPixel(row, col, color) {
  var cell = document.querySelector(".r" + row + ".c" + col);
  cell.style.backgroundColor = color;
}
function drawPixelExt(row, col, color) {
  var cell = document.querySelector(".r" + row + ".c" + col);
  
  if (cell === null) {
    var table = document.querySelector("table");
    
    while (table.rows.length < row) {
      var newRow = table.insertRow();
      for (var i = 0; i < table.rows[0].cells.length; i++) {
        var newCell = newRow.insertCell();
        newCell.classList.add("r" + (table.rows.length - 1));
        newCell.classList.add("c" + i);
      }
    }
  
    for (var i = 0; i < table.rows.length; i++) {
      var currentRow = table.rows[i];
      while (currentRow.cells.length <= col) {
        var newCell = currentRow.insertCell();
        newCell.classList.add("r" + i);
        newCell.classList.add("c" + (currentRow.cells.length - 1));
      }
    }
    row=row-1;
    col=col-1;
    cell = document.querySelector(".r" + row + ".c" + col);
  }
  
  cell.style.backgroundColor = color;
}

function colorMixer(colorA, colorB, amount) {
  let cA = colorA * (1 - amount);
  let cB = colorB * amount;
  return parseInt(cA + cB);
}

function drawPixelAmount(row, col, color, amount) {
  var cell = document.querySelector(".r" + row + ".c" + col);
  var currentColor = getComputedStyle(cell).backgroundColor;
  var currentColorArray = currentColor.match(/\d+/g);
  var targetColorArray = color.match(/\d+/g);

  if (amount === 1) {
    cell.style.backgroundColor = color;
  } 
 else 
  if (amount != 0)
  {
    var newColorArray = [];
    for (var i = 0; i < 3; i++) {
      var mixedColor = colorMixer(
        parseInt(currentColorArray[i]),
        parseInt(targetColorArray[i]),
        amount
      );
      newColorArray.push(mixedColor);
    }
    var newColor = "rgb(" + newColorArray.join(",") + ")";
    cell.style.backgroundColor = newColor;
  }
}


function drawLine(r1, c1, r2, c2, color) {
  if (r1 === r2) {
    for (var col = c1; col <= c2; col++) {
      drawPixel(r1, col, color);
    }
  } 
  else if (c1 === c2) {
    for (var row = r1; row <= r2; row++) {
      drawPixel(row, c1, color);
    }
  }
}
function drawRect(r1, c1, r2, c2, color) {
  for (var col=c1;col<=c2;col++){
    drawLine(r1,col,r2,col,color);
  }
  }

  function delRow(row) {
    var table = document.querySelector("table");
    var rowCount = table.rows.length;
  
    if (row >= 0 && row < rowCount) {
      table.deleteRow(row);
      for (var i = row; i < rowCount - 1; i++) {
        var currentRow = table.rows[i];
        var nextRow = table.rows[i + 1];
        for (var j = 0; j < currentRow.cells.length; j++) {
          currentRow.cells[j].classList = nextRow.cells[j].classList;
        }
      }
    }
  }
  
  function delCol(col) {
    var table = document.querySelector("table");
  
    for (var i = 0; i < table.rows.length; i++) {
      var currentRow = table.rows[i];
      var cellCount = currentRow.cells.length;
  
      if (col >= 0 && col < cellCount) {
        currentRow.deleteCell(col);
        for (var j = col; j < cellCount - 1; j++) {
          currentRow.cells[j].classList = currentRow.cells[j + 1].classList;
        }
      }
    }
  }
  function shiftRow(row, pos) {
    var table = document.querySelector("table");
    var rowCount = table.rows.length;
  
    if (row >= 0 && row < rowCount) {
      var currentRow = table.rows[row];
      var cellCount = currentRow.cells.length;
      var effectivePos = pos % cellCount;
  
      var cellContent = [];
      for (var i = 0; i < cellCount; i++) {
        cellContent.push(currentRow.cells[i].innerHTML);
      }
  
      for (var i = 0; i < cellCount; i++) {
        var shiftedIndex = (i + effectivePos) % cellCount;
        currentRow.cells[i].innerHTML = cellContent[shiftedIndex];
      }
    }
  }
  function jumble() {
    var table = document.querySelector("table");
    var rowCount = table.rows.length;
  
    for (var row = 0; row < rowCount; row++) {
      var cellCount = table.rows[row].cells.length;
      var randomPos = Math.floor(Math.random() * cellCount);
  
      shiftRow(row, randomPos);
    }
  }
    
  

drawTable(10,10);
colorCol(3,"red");
colorRow(6,"green");
rainbow("horizontal");
drawPixel(3,4,"pink");
drawLine(6,1,6,4,"white");
drawRect(7,2,9,6,"black");
drawPixelExt(13,6,"pink");
drawPixelAmount(5,7,"green",0.6);
delRow(12);
delCol(9);
shiftRow(8,3);
jumble();


