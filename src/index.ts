import { Board } from './classes/board';
import { easyBoard1, mediumBoard1, hardBoard1, evilPuzzle1 } from '../mockBoards'
import { findAllPossibles } from './functions/findPossibles';
import { findAllSinglesBoxes, findAllSinglesColumns, findAllSinglesRows } from './functions/findSingles';
import { findAllNakedSquaresBoxes, findAllNakedSquaresColumns, findAllNakedSquaresRows } from './functions/findNakedPairs';
import { validateBoard } from './functions/validators';
console.log('Sudoku Solver');


const board = new Board(hardBoard1);

// Createboard
let container = document.getElementById("container");
let innerContainerCount = 1;
let innerContainer = document.createElement("div");
innerContainer.id = `innerContainer-${innerContainerCount};`

container.appendChild(innerContainer);
displayBoardinHtml(board, 'start');
// board.viewFullOnConsole();

function displayBoardinHtml(board: Board, notes: string) {
  let container = document.getElementById(`innerContainer-${innerContainerCount};`);
  innerContainerCount++;

  const topRow = document.createElement("div");
  
  topRow.innerText = notes + '\n' + '__________________________________'
  container.appendChild(topRow);
  const state = board.state;
  for (let rowId in state) {
    let rowArr = state[rowId];
    let row = document.createElement("div");
    row.id = `${rowId}`;
    row.innerText = '';
    rowArr.forEach((square) => {
      row.innerText += `|_${square.currentNumber || '_'}_|`;
    })
    container.appendChild(row);
  }
  let innerContainer = document.createElement("div");
  innerContainer.id = `innerContainer-${innerContainerCount};`
  container.appendChild(innerContainer);
}

// button.addEventListener('click', (evt) => {
//   console.log('solve');
// });


document.getElementById('existing-numbers').onclick = () => {
  console.log('existing-numbers');
  findAllPossibles(board);
  displayBoardinHtml(board, 'existing-numbers');
  validateBoard(board);
};​

document.getElementById('find-singles-rows').onclick = () => {
  console.log('find-singles-rows');
  findAllSinglesRows(board);
  displayBoardinHtml(board, 'find-singles-rows');
  validateBoard(board);
};​

document.getElementById('find-singles-columns').onclick = () => {
  console.log('find-singles-columns');
  findAllSinglesColumns(board);
  displayBoardinHtml(board, 'find-singles-columns');
  validateBoard(board);
};​

document.getElementById('find-singles-boxes').onclick = () => {
  console.log('find-singles-boxes');
  findAllSinglesBoxes(board);
  displayBoardinHtml(board, 'find-singles-boxes');
  validateBoard(board);
};​

document.getElementById('naked-pairs-rows').onclick = () => {
  console.log('naked-pairs-rows');
  findAllNakedSquaresRows(board);
  displayBoardinHtml(board, 'naked-pairs-rows');
  validateBoard(board);
};​

document.getElementById('naked-pairs-columns').onclick = () => {
  console.log('naked-pairs-columns');
  findAllNakedSquaresColumns(board);
  displayBoardinHtml(board, 'naked-pairs-columns');
  validateBoard(board);
};​

document.getElementById('naked-pairs-boxes').onclick = () => {
  console.log('naked-pairs-boxes');
  findAllNakedSquaresBoxes(board);
  displayBoardinHtml(board, 'naked-pairs-boxes');
  validateBoard(board);
};​

document.getElementById('view-console').onclick = () => {
  board.viewFullOnConsole();
}​;​