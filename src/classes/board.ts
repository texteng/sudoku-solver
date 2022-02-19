import { Square } from "./square";
import { numbers, rawNumbers, importBoard } from '../types';
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

  clearValuesBasedOnExistingNumbers() {
    for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
      for (let columnNumber = 0; columnNumber < 9; columnNumber++) {
        let currentSquare = this._state[rowNumber][columnNumber];
        if (currentSquare.isFull) {
          this.clearRowBasedOnExistingNumber(rowNumber, currentSquare.currentNumber);
          this.clearColumnBasedOnExistingNumber(columnNumber, currentSquare.currentNumber);
          this.clearBoxBasedOnExistingNumber(rowNumber, columnNumber, currentSquare.currentNumber)
        }
      }
    }
  }
  
  clearRowBasedOnExistingNumber(rowNumber: number, value: numbers) {
    for (let squareIndex = 0; squareIndex < 9; squareIndex++) {
      this._state[rowNumber][squareIndex].removePossibleNumber(value);
    }
  }

  clearColumnBasedOnExistingNumber(columnNumber: number, value: numbers) {
    for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
      this._state[rowNumber][columnNumber].removePossibleNumber(value);
    }
  }

  clearBoxBasedOnExistingNumber(rowNumber: number, columnNumber: number, value: numbers) {
    const boxFirstRowIndex = this.findBoxIndex(rowNumber);
    const boxFirstColumnIndex = this.findBoxIndex(columnNumber);
    for (let rowCount = 0; rowCount < 3; rowCount++) {
      for (let colummCount = 0; colummCount < 3; colummCount++) {
        this._state[boxFirstRowIndex + rowCount][boxFirstColumnIndex + colummCount].removePossibleNumber(value);
      }
    }
  }
  
  display() {
    this._state.forEach((row) => {
      console.log(row.map((data) => data.currentNumber));
    })
    console.log('************************************');
  }

  private findBoxIndex(number: number) {
    return number - (number % 3);
  }
}
