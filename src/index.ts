import { Board } from './classes/board';
import { easyBoard1, mediumBoard1, hardBoard1, evilPuzzle1 } from '../mockBoards'
import { clearPossibleValuesWithExistingNumbers } from './functions/clearPossibleValuesWithExistingNumbers';
import { narrowDownAllBoxes, narrowDownAllColumns, narrowDownAllRows } from './functions/narrowDownPossibleValues';
console.log('Sudoku Solver');


const board = new Board(hardBoard1);
// Createboard
let container = document.getElementById("container");
let innerContainerCount = 1;
let innerContainer = document.createElement("div");
innerContainer.id = `innerContainer-${innerContainerCount};`

container.appendChild(innerContainer);
displayBoardinHtml(board);
// board.viewFullOnConsole();

function displayBoardinHtml(board: Board) {
  let container = document.getElementById(`innerContainer-${innerContainerCount};`);
  innerContainerCount++;
  const topRow = document.createElement("div");
  topRow.innerText = '__________________________________'
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
  clearPossibleValuesWithExistingNumbers(board);
  displayBoardinHtml(board);
};​

document.getElementById('narrow-rows').onclick = () => {
  console.log('narrow-rows');
  narrowDownAllRows(board);
  displayBoardinHtml(board);
};​


document.getElementById('narrow-columns').onclick = () => {
  console.log('narrow-columns');
  narrowDownAllColumns(board);
  displayBoardinHtml(board);
};​


document.getElementById('narrow-boxes').onclick = () => {
  console.log('narrow-boxes');
  narrowDownAllBoxes(board);
  displayBoardinHtml(board);
};​

document.getElementById('view-console').onclick = () => {
  board.viewFullOnConsole();
}​;​