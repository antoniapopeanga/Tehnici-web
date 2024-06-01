document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
  e = e || window.event;
  var color, div;
  switch (e.keyCode) {
    case 82: // R
      color = "red";
      break;
    case 71: // G
      color = "green";
      break;
    case 89: // Y
      color = "yellow";
      break;
    case 66: // B
      color = "blue";
      break;
    default:
      return;
  }
  div = createbulina(color);
  buline.push(div);
}

function createbulina(color) {
  var marime = document.getElementById("size").value;
  var div = document.createElement("div");
  div.style.width = marime + "px";
  div.style.height = marime + "px";
  div.style.backgroundColor = color;
  div.style.borderRadius = "50%";
  div.style.position = "absolute";
  document.body.appendChild(div);
  div.style.top = getRandomPosition() + "px";
  div.style.left = getRandomPosition() + "px";
  var count = parseInt(localStorage.getItem("count")) || 0;
  count++;
  localStorage.setItem("count", count.toString());
  afisareCount(); // Update the count display
  return div;
}

function getRandomPosition() {
  var bodyWidth = document.body.offsetWidth;
  var bodyHeight = document.body.offsetHeight;
  var position = Math.floor(Math.random() * (bodyWidth - 150)) + 75;
  return position;
}

function afisareCount() {
    var count = parseInt(localStorage.getItem("count")) || 0;
    var countDiv = document.getElementById("countDiv");
    if (countDiv == null) {
      countDiv = document.createElement("div");
      countDiv.id = "countDiv";
      countDiv.style.position = "fixed";
      countDiv.style.top = "30px";
      countDiv.style.left = "10px";
      document.body.appendChild(countDiv);
    }
    countDiv.textContent = "Numar buline: " + count;
  }
  
document.body.addEventListener("click", handleclickbulina);

function handleclickbulina(e) {
  e = e || window.event;
  var tinta = e.target;
  if (tinta.style.backgroundColor) {
    var color = tinta.style.backgroundColor;
    createbulina(color);
  }
}

if (!localStorage.getItem("count")) {
  localStorage.setItem("count", "0");
}


