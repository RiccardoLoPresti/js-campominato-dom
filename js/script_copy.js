/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/


//1.generare 16 bombe univoche
//2.se clicco cella ed idcella = bomba -> perso (colore rosso) ELSE 
// si colora di azzurro idcella != bomba continuo a giocare
//3.END= se prendo una bomba o se sseleziono tutte le caselle giuste
//4.tengo conto del punteggio e lo comunico alla fine
//5.resetto e rincolmincio

const btnPlay = document.getElementById('play')
const container = document.querySelector('.container');
let cellePerRiga = 0;
let celleTotali = 0;
const numeroBombeTotali = 3;
let bombe = [];
let score = 0;
let array =[];

btnPlay.addEventListener('click', play);

function play(){
  score = 0
  array =[]
  container.innerHTML ='';
  cellePerRiga = document.getElementById('level').value;
  celleTotali = calcoloGriglia(cellePerRiga);
  bombe = generatoreBombe(numeroBombeTotali,celleTotali)

  generatoreCelle(celleTotali);


  console.log(bombe);
  console.log(celleTotali);
}


function calcoloGriglia(cellePerRiga) {
  return celleTotali = Math.pow(cellePerRiga, 2);
}

function generatoreBombe(numeroBombeTotali,celleTotali){
  let arrayBombe = [];
  do{
    let nbomba = Math.floor(Math.random() * celleTotali) + 1;
    if(!arrayBombe.includes(nbomba)){
      arrayBombe.push(nbomba);
    }
  }
  while (arrayBombe.length < numeroBombeTotali);

  return arrayBombe;
}

function generatoreCelle(celleTotali){
  for(let i = 0; i < celleTotali; i++){
    let cella = document.createElement('div');
    cella.className = "square";
    dimensione(cella)
    container.append(cella);
    cella.innerText = i + 1;

    clickEvent(cella,i);
  }
}

function dimensione(cella) {
  cella.style.width = `calc(100% / ${cellePerRiga}`
  cella.style.height = `calc(100% / ${cellePerRiga}`
}

function clickEvent(cella, i) {
    cella.addEventListener('click', function(){
      this.idCella = i + 1;
      const idCella = this.idCella;
      const cella = document.getElementsByClassName('square')

      if(!array.includes(idCella)){
        score++;
        cella[i].classList.add('color');
        array.push(idCella);
        let vincita = celleTotali - numeroBombeTotali;
        console.log("valore vincita : ", vincita);
        console.log("score value:", score);
        if (score == vincita) {
          console.log('HAI VINTO');
        }
      }
      
      console.log('---------->',array);
      console.log('questo è il punteggio:',score);
      
      if(bombe.includes(idCella)){
        cella[i].classList.add('bomb')
        haiPerso = true;
        console.log('PERSO');
      }
    }
    )
}


