


document.addEventListener("DOMContentLoaded", function() {
  const objectives = {
    Japan: ['Tokyo Tower', 'Mount Fuji', 'Kyoto Temples', 'Hiroshima Peace Memorial', 'Osaka Castle'],
    Netherlands: ['Van Gogh Museum', 'Anne Frank House', 'Keukenhof Gardens', 'Rijksmuseum', 'Canals of Amsterdam'],
    Morocco: ['Marrakech Medina', 'Hassan II Mosque', 'Chefchaouen', 'Sahara Desert', 'Atlas Mountains'],
    France: ['Louvre Museum', 'Eiffel Tower', 'Orsay Museum', 'French Riviera', 'Versailles'],
    Spain: ['Sagrada Familia', 'Park Güell', 'Prado Museum', 'Alhambra', 'Ibiza'],
    UnitedStates: ['Statue of Liberty', 'Grand Canyon', 'Times Square', 'Yellowstone National Park', 'Las Vegas Strip'],
    China: ['Great Wall of China', 'Forbidden City', 'Terracotta Army', 'The Bund', 'Potala Palace'],
    Italy: ['Colosseum', 'Venice Canals', 'Sistine Chapel', 'Cinque Terre', 'Pompeii'],
    Turkey: ['Hagia Sophia', 'Cappadocia', 'Ephesus', 'Pamukkale', 'Blue Mosque'],
    Mexico: ['Chichen Itza', 'Tulum', 'Teotihuacan', 'Cancun', 'Palenque'],
    Germany: ['Brandenburg Gate', 'Neuschwanstein Castle', 'Cologne Cathedral', 'Berlin Wall', 'Black Forest'],
    Thailand: ['Wat Arun', 'Phi Phi Islands', 'Grand Palace', 'Ayutthaya', 'Floating Markets'],
    UnitedKingdom: ['Tower of London', 'Stonehenge', 'Buckingham Palace', 'Edinburgh Castle', 'The British Museum'],
    Malaysia: ['Petronas Towers', 'Batu Caves', 'Langkawi', 'George Town', 'Sepilok Orangutan Rehabilitation Centre'],
    Russia: ['Red Square', 'Hermitage Museum', 'St. Petersburg', 'Trans-Siberian Railway', 'Lake Baikal'],
    Greece: ['Acropolis of Athens', 'Santorini', 'Parthenon', 'Mykonos', 'Delphi'],
    Portugal: ['Lisbon', 'Porto', 'Algarve', 'Sintra', 'Belem Tower'],
    Canada: ['Niagara Falls', 'Banff National Park', 'CN Tower', 'Vancouver', 'Whistler'],
    Hungary: ['Budapest Parliament', 'Széchenyi Thermal Bath', 'Danube River']
  };
    const plane = document.getElementById("plane");
    const map = document.getElementById("map");
    const mapWidth = map.getBoundingClientRect().width;
    const mapHeight = map.getBoundingClientRect().height;
    
    let planeX = 0;
    let planeY = Math.random() * (mapHeight - plane.offsetHeight);//folosirea functiei random din Math
    plane.style.top = planeY + "px";
    
    setInterval(function() {//setInterval
      planeX += 15;
      if (planeX >= mapWidth) {
        planeX = 0;
        planeY = Math.random() * (mapHeight - plane.offsetHeight);//schimbarea aleatoare a pozitiei
        plane.style.top = planeY + "px";//modificarea de proprietati
      }
      plane.style.left = planeX + "px";//modificarea de proprietati
    }, 100);
    document.querySelectorAll(".allPaths").forEach(e => {
        e.addEventListener("mouseover", function () {//eveniment generat de mouse
            e.setAttribute("stroke", "rgba(132, 70, 91, 1)");
            e.setAttribute("stroke-width", "4");
            window.onmousemove=function (j) {
                x = j.clientX;
                y = j.clientY;
                document.getElementById('name').style.top = y-60  + 'px';
                document.getElementById('name').style.left = x +10 + 'px';
            }
            e.style.fill = " rgba(228, 186, 200, 0.7)";//modificarea stilului unui element
            document.getElementById("name").style.opacity = 1;//modificarea proprietatii 
            
            document.getElementById("namep").innerText = e.id;
        })
        e.addEventListener("mouseleave", function () {//eveniment generat de mouse
            e.removeAttribute("stroke");
            e.removeAttribute("stroke-width");
            e.style.fill = "#ececec";
            document.getElementById("name").style.opacity = 0;
        })

    e.addEventListener("click", function(event) {
      const country = event.target.id.replace(/\s/g, "");//folosirea target
      const objectivesList = objectives[country];
      const objectivesContainer = document.getElementById("objectives-container");
  
      if (objectivesList && objectivesList.length > 0) {
        objectivesContainer.innerHTML = "";
        const objectivesListElement = document.createElement("ul");//crearea unui element
  
        objectivesList.forEach(objective => {
          const objectiveItem = document.createElement("li");
          objectiveItem.textContent = objective;

          objectivesListElement.appendChild(objectiveItem);
        });
        objectivesContainer.appendChild(objectivesListElement);
        setTimeout(function() {
          while (objectivesContainer.firstChild) {
            objectivesContainer.firstChild.remove();//stergerea elementului
          }
        }, 7000);
      } 
      else {
        objectivesContainer.innerHTML = "This country has not been visited yet.";
      }
    });
  });
});
