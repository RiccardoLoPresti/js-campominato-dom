const btn = document.getElementById('play')
const container = document.querySelector('.container');
let squareForRow = 0;

btn.addEventListener('click', function(){
  squareForRow = document.getElementById('level').value;
  container.innerHTML = ''
  init()
});


/**
 * Funzione di inizializazione
 */
function init() {
  //salvo il numero dei quadratini
  const totalSquare = squareTot(squareForRow);
  //salvo il numero totale dei quadratini
  squareGen(totalSquare);
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
    square.idSq = i + 1;
    square.addEventListener('click', function(){
      square.innerText = i + 1;
      square.classList.add('color')
      console.log(this.idSq);
    })
  }
}