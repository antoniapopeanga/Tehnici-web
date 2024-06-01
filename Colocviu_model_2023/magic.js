document.addEventListener("click", clickbila);

window.onload = function () {
  const canvas = document.getElementById("discNegru");
  const context = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 70;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "black";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#003300";
  context.stroke();

  const canv = document.getElementById("discAlb");
  const c = canv.getContext("2d");
  const crX = canv.width / 2;
  const crY = canv.height / 2;
  const rad = 35;

  c.beginPath();
  c.arc(crX, crY, rad, 0, 2 * Math.PI, false);
  c.fillStyle = "white";
  c.fill();
  c.font = "bold 50px Arial";
  c.fillStyle = "black";
  c.fillText("8", crX - 13, crY + 14);
};

function clickbila(e) {
  e = e || window.event;
  var tinta = e.target;
  fetch("http://localhost:8000/magic.json")
    .then((res) => res.json())
    .then((mesaj) => {
      if (tinta.getContext) {
        var canvas = document.getElementById("discAlb");
        var disc = canvas.getContext("2d");
        var color = culoareRandom();
        var mesajElement = document.getElementById("mesaj");
        mesajElement.style.position = "absolute";
        mesajElement.style.top = "200px";
        mesajElement.style.left = "50px";
        if (color === "red") {
          mesajElement.textContent = "Raspuns negativ";
          mesajElement.style.color = "red";
        } else if (color === "orange") {
          mesajElement.textContent = "Incearca din nou";
          mesajElement.style.color = "orange";
        } else if (color === "green") {
          mesajElement.textContent = "Raspuns afirmativ";
          mesajElement.style.color = "green";
        }
        disc.fillStyle = color;
        disc.fill();

        // Send the answer to the server
        const answer = {
          color: color,
          timestamp: new Date().toISOString(),
          question: mesaj.text // It seems like you're using the 'mesaj' variable for the question
        };
        fetch("http://localhost:8000/answers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(answer)
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
}

function culoareRandom() {
  var colors = ["red", "green", "orange"];
  var randNum = Math.floor(Math.random() * 3);
  return colors[randNum];
}
