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
let squareForRow = 0;
const NUMBER_BOMS = 3;
let bomb = [];
let score = 0;


btnPlay.addEventListener('click', play);

/**
 * Funzione di inizializazione
 */
function play() {
  //prendo input livello di difficoltà
  squareForRow = document.getElementById('level').value;
  container.innerHTML = ''
  //salvo il numero dei quadratini
  const totalSquare = squareTot(squareForRow);
  //salvo il numero totale dei quadratini
  squareGen(totalSquare);

  bomb = bombGen(NUMBER_BOMS,totalSquare);
  console.log(bomb);
  console.log(bomb);
}

/**
 * Calcola il numero massimo dei quadratini
 * @param {number} numberSquareForRow 
 * @returns totale Square
 */
function squareTot(numberSquareForRow){
  return totSquare = Math.pow(numberSquareForRow, 2);
}

/**
 * Genera il numero di quadrati necesari e lo stampa in HMTL facendo cambiare colore al click della casella
 * @param {number} nSquare 
 * @returns square stampati in html
 */
function squareGen(nSquare){
  for(let i = 0; i < nSquare; i++){
    let square = document.createElement('div');
    square.className = "square";
    square.style.width = `calc(100% / ${squareForRow}`
    square.style.height = `calc(100% / ${squareForRow}`
    container.append(square);
    square.innerText = i + 1;

    square.addEventListener('click', function(){
      
      square.idSq = i + 1;
      const elementId = square.idSq

      if(bomb.includes(elementId)){
        square.classList.add('bomb');
        const output = document.createElement('div');
        output.innerHTML = `<span>HAI PERSO! Hai fatto 
        ${score-1} punti su xxx</span>`;
        container.append(output)
      }else{
        //auemnto score
        score++
        console.log('score', score);
        square.classList.add('color')
        console.log(this.idSq);
        if (score === (totalSquare - NUMBER_BOMS)) {
          console.log('vinto');
        }
      }
      
    })
  }
}

function bombGen(NUMBER_BOMS,totalSquare){
  let bombsArray = [];
  do{
    let bombs = Math.floor(Math.random() * totalSquare) + 1;
    if(!bombsArray.includes(bombs)){
      bombsArray.push(bombs);
    }
  }
  while (bombsArray.length < NUMBER_BOMS);

  return bombsArray;
}

/*function handlerClick(idSq) {
  for (let i = 0; i < bomb.length; i++) {
    let element = bomb[i];
    return element;
  }
}
console.log(handlerClick(2));*/