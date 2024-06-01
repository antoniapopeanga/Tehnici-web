/*
//ex 1-13
let nume = prompt("Hai să jucăm X și 0. Cum te cheamă?");
let jucator1 = prompt("Bună " + nume + "! Cu ce vrei să joci? X sau 0? X începe primul.");
let jucator2;
if (jucator1 === 'X') {
  jucator2 = '0';
} else {
  jucator2 = 'X';
}
const tabla = new Array(9);

// Initializam fiecare element cu "?"
for(let i = 0; i < tabla.length; i++) {
  tabla[i] = '?';
}


function printtt(tabla){
  let tablaa = tabla.slice();
    for(let i = 0; i < tabla.length/3; i++) {
        if(tabla[i*3]=='?')
        tablaa[i*3]=i*3+1;
        if(tabla[i*3+1]=='?')
        tablaa[i*3+1]=i*3+2;
        if(tabla[i*3+2]=='?')
        tablaa[i*3+2]=(i*3+3);
        console.log("|"+tablaa[i*3]+"|"+" "+"|"+tablaa[i*3+1]+"|"+" "+"|"+ tablaa[i*3+2]+"|");
      }
    }
    function win(tabla) {
      // Verificăm câștigul pe rânduri
      for(let i = 0; i < tabla.length; i+=3) {
        if(tabla[i] !== '?' && tabla[i] === tabla[i+1] && tabla[i+1] === tabla[i+2]) {
          return tabla[i];
        }
      }
    
      // Verificăm câștigul pe coloane
      for(let i = 0; i < 3; i++) {
        if(tabla[i] !== '?' && tabla[i] === tabla[i+3] && tabla[i+3] === tabla[i+6]) {
          return tabla[i];
        }
      }
    
      // Verificăm câștigul pe diagonale
      if(tabla[0] !== '?' && tabla[0] === tabla[4] && tabla[4] === tabla[8]) {
        return tabla[0];
      }
    
      if(tabla[2] !== '?' && tabla[2] === tabla[4] && tabla[4] === tabla[6]) {
        return tabla[2];
      }
    
      // Dacă nu a castigat nimeni, returnăm null
      return null;
    }

    function draw(tabla) {
      // Verificăm dacă există '?'
      for (let i = 0; i < tabla.length; i++) {
        if (tabla[i] === '?') {
          return false;
        }
      }
      
      // Verificăm dacă există o configurație de câștig
      if (!win(tabla)) {
        return true;
      }
      
      // Dacă nu este nici o configurație de câștig și tabla nu mai are spații goale, atunci nu este remiză
      return false;
    }
    function computerMove(tabla) {
      let poz;
      do {
        // Generăm o poziție aleatorie
        poz = Math.floor(Math.random() * 9);
      } while (!valid(poz, tabla));
      
      tabla[poz] = jucator1 === 'X' ? '0' : 'X';
      console.log("Calculatorul a mutat la poziția", poz);
      printtt(tabla);
    }

    function valid(p, tabla) {
      if (p >= 0 && p <= 8 && tabla[p] == '?')
        return true;
      else
        return false;
    }
    
while(win(tabla)==null && draw(tabla)!=true){
  if(jucator1=='X'){
    let poz = parseInt(prompt("Unde vrei să pui următorul semn?"));
    if(valid(poz,tabla)==true){
      tabla[poz]=jucator1;
      printtt(tabla);
    }
    else {
      console.log("Pozitie invalida!Incercati din nou.");
    }
    computerMove(tabla);
  }
  else{
    computerMove(tabla);
    let poz = parseInt(prompt("Unde vrei să pui următorul semn?"));
    if(valid(poz,tabla)==true){
      tabla[poz]=jucator1;
      printtt(tabla);
    }
    else {
      console.log("Pozitie invalida!Incercati din nou.");
    }
  }
    
    if(win(tabla)==jucator1)
        alert("Bravo,"+ nume +", ai câștigat!");
    else if(win(tabla)==jucator2)
        alert("Ai pierdut :(");
    if(draw(tabla)==true)
        alert("Remiză!");
    
  }
  */

  //ex 14

class Joc{ 
  constructor() {
    this.tabla = new Array(9).fill('?');
    this.jucator1 = { nume: '', semn: '' };
    this.jucator2 = { nume: '', semn: '' };
  }

  printtt() {
    let tablaa = this.tabla.slice();
    for (let i = 0; i < 3; i++) {
      if (this.tabla[i * 3] == '?') tablaa[i * 3] = i * 3 + 1;
      if (this.tabla[i * 3 + 1] == '?') tablaa[i * 3 + 1] = i * 3 + 2;
      if (this.tabla[i * 3 + 2] == '?') tablaa[i * 3 + 2] = i * 3 + 3;
      console.log('|' + tablaa[i * 3] + '|' + ' ' + '|' + tablaa[i * 3 + 1] + '|' + ' ' + '|' + tablaa[i * 3 + 2] + '|');
    }
  }

  win() {
    // Verificăm câștigul pe rânduri
    for (let i = 0; i < 9; i += 3) {
      if (this.tabla[i] !== '?' && this.tabla[i] === this.tabla[i + 1] && this.tabla[i + 1] === this.tabla[i + 2]) {
        return this.tabla[i];
      }
    }

    // Verificăm câștigul pe coloane
    for (let i = 0; i < 3; i++) {
      if (this.tabla[i] !== '?' && this.tabla[i] === this.tabla[i + 3] && this.tabla[i + 3] === this.tabla[i + 6]) {
        return this.tabla[i];
      }
    }

    // Verificăm câștigul pe diagonale
    if (this.tabla[0] !== '?' && this.tabla[0] === this.tabla[4] && this.tabla[4] === this.tabla[8]) {
      return this.tabla[0];
    }

    if (this.tabla[2] !== '?' && this.tabla[2] === this.tabla[4] && this.tabla[4] === this.tabla[6]) {
      return this.tabla[2];
    }

    // Dacă nu a castigat nimeni returnăm null
    return null;
  }

  draw() {
    // Verificăm dacă există '?'
    for (let i = 0; i < 9; i++) {
      if (this.tabla[i] === '?') {
        return false;
      }
    }

    // Verificăm dacă există o configurație de câștig
    if (!this.win()) {
      return true;
    }

    // Dacă nu este nici o configurație de câștig și tabla nu mai are spații goale, atunci nu este remiză
    return false;
  }

    computerMove() {
        let poz;
        do {
          // Generăm o poziție aleatorie
          poz = Math.floor(Math.random() * 9);
        } while (!valid(poz));
        
        this.tabla[poz] = this.jucator1.semn === 'X' ? '0' : 'X';
        console.log("Calculatorul a mutat la poziția", poz);
        printtt();
      }
  
     valid(p) {
        if (p >= 0 && p <= 8 && this.tabla[p] == '?')
          return true;
        else
          return false;
      }
      
};
let nume = prompt("Hai să jucăm X și 0. Cum te cheamă?");
let semn1= prompt("Bună " + nume + "! Cu ce vrei să joci in primul joc? X sau 0? X începe primul.");
let semn3= prompt("Bună " + nume + "! Cu ce vrei să joci in al doilea joc? X sau 0? X începe primul.");
let semn2,semn4;
if (semn1 === 'X') {
  semn2 = '0';
} else {
  semn2 = 'X';
}
if (semn3 === 'X') {
  semn4 = '0';
} else {
  semn4 = 'X';
}
const tabla1 = new Array(9);
const tabla2 = new Array(9);

const joc1 = new Joc();
joc1.jucator1.nume = nume;
joc1.jucator1.semn = semn1;
joc1.jucator2.nume = 'calculator';
joc1.jucator2.semn = semn2;
joc1.tabla=tabla1;

const joc2 = new Joc();
joc2.jucator1.nume = Number;
joc2.jucator1.semn = semn3;
joc2.jucator2.nume = 'calculator';
joc2.jucator2.semn = semn4;
joc2.tabla=tabla2;
let jocCurent = joc1; // începeți cu primul joc
let jocTerminat1 = false;
let jocTerminat2 = false;

while(!(jocTerminat1 && jocTerminat2)) {
  console.log(`Este rândul lui ${jocCurent.jucator1.nume} (${jocCurent.jucator1.semn})`);

  jocCurent.printtt();

  // mișcarea jucătorului în jocul curent
  jocCurent.tabla[poz] = jocCurent.jucator1.semn;

  if(jocCurent.win()) {
    console.log(`${jocCurent.jucator1.nume} a câștigat jocul ${jocCurent === joc1 ? '1' : '2'}!`);
    if(jocCurent === joc1) {
      jocTerminat1 = true;
    } 
    else {
      jocTerminat2 = true;
    }
  }

  if(jocCurent.draw()) {
    console.log(`Jocul ${jocCurent === joc1 ? '1' : '2'} este remiză!`);
    if(jocCurent === joc1) {
      jocTerminat1 = true;
    } 
    else {
      jocTerminat2 = true;
    }
  }

  //următorul joc
  jocCurent = (jocCurent === joc1) ? joc2 : joc1;
}

console.log("Ambele jocuri s-au terminat!");