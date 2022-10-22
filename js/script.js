const btnPlay = document.getElementById('play')
const container = document.querySelector('.container');
let cellePerRiga = 0;
let celleTotali = 0;
const numeroBombeTotali = 16;
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

      if(!array.includes(idCella) && !bombe.includes(idCella)){
        score++;
        cella[i].classList.add('color');
        array.push(idCella);
        let vincita = celleTotali - numeroBombeTotali;
        if (score == vincita) {
          win(vincita)
        }
      }
      if(bombe.includes(idCella)){
        cella[i].classList.add('bomb')
        gameOver();
      }
    })
}

function gameOver() {
  const output = document.createElement('div');
  const layover = document.createElement('div');
  output.className = 'output'
  output.innerHTML = `
    <span>HAI PERSO! Hai fatto ${score} punti su ${celleTotali - numeroBombeTotali}</span>
  `;
  container.append(output);
  layover.className = 'layover';
  container.prepend(layover);
}

function win(){
  const output = document.createElement('div');
  const layover = document.createElement('div');
  output.className = 'output'
  output.innerHTML = `
    <span>HAI VINTO!!</span>
  `;
  container.append(output)
  layover.className = 'layover';
  container.prepend(layover);
}
