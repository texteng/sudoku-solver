import { Square } from "./square";
import { rawNumbers, importBoard } from '../types';
export class Board {

  private _state: Square[][] = [[]];

  constructor(importBoardData: importBoard) {
    this.createBoard(importBoardData);
  }

  get state() {
    return this._state;
  }

  private createBoard(importBoardData: importBoard) {
    let count = 1;
    this._state = importBoardData.map((row) => row.map((squareData: rawNumbers) => {
      let square = new Square(count++);
      if (squareData !== 0) square.currentNumber = `${squareData}`;
      return square;
    }))
  }

  clearPossibleValuesWithExistingNumbers() {
    for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
      for (let columnNumber = 0; columnNumber < 9; columnNumber++) {
        let currentSquare = this._state[rowNumber][columnNumber];
        if (currentSquare.isFull && !currentSquare.possibleNumbersRemovedFromRelatedSquares) {
          for (let count = 0; count < 9; count++) {
            // Clears the possible number out of row
            this._state[rowNumber][count].removePossibleNumber(currentSquare.currentNumber);

            // Clears the possible number out of column
            this._state[count][columnNumber].removePossibleNumber(currentSquare.currentNumber);

          }
          // Clears possible number out of box
          const boxFirstRowIndex = rowNumber - (rowNumber % 3);
          const boxFirstColumnIndex = columnNumber - (columnNumber % 3);
          for (let rowCount = 0; rowCount < 3; rowCount++) {
            if (rowCount !== rowNumber) {
              for (let colummCount = 0; colummCount < 3; colummCount++) {
                if (colummCount !== columnNumber) {
                  this._state[boxFirstRowIndex + rowCount][boxFirstColumnIndex + colummCount].removePossibleNumber(currentSquare.currentNumber);
                }
              }
            }
          }
          currentSquare.possibleNumbersRemovedFromRelatedSquares = true;
        }
      }
    }
  }

  viewSimpleOnConsole() {
    this._state.forEach((row) => {
      console.log(row.map((data) => data.currentNumber));
    })
    console.log('************************************');
  }

  viewFullOnConsole() {
    this._state.forEach((row) => {
      console.log(row);
    })
    console.log('************************************');
  }
}
