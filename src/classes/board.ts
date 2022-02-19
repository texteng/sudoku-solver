import { Square, numbers } from "./square";
export class Board {

  private state: Square[][] = [[]];
  boardData = mockSudokuBoard2;

  constructor() {
    this.createBoard();
    this.display();
    this.clearValuesBasedOnExistingNumbers();
    this.display();
    this.clearValuesBasedOnExistingNumbers();
    this.display();
    this.clearValuesBasedOnExistingNumbers();
    // console.log(this.state);
  }

  private createBoard() {
    let count = 1;
    this.state = this.boardData.map((row) => row.map((squareData: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) => {
      let square = new Square(count++);
      if (squareData !== 0) square.setCurrentNumber(`${squareData}`);
      return square;
    }))
  }

  clearValuesBasedOnExistingNumbers() {
    for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
      for (let columnNumber = 0; columnNumber < 9; columnNumber++) {
        let currentSquare = this.state[rowNumber][columnNumber];
        if (currentSquare.isFilled) {
          this.clearRowBasedOnExistingNumber(rowNumber, currentSquare.currentNum);
          this.clearColumnBasedOnExistingNumber(columnNumber, currentSquare.currentNum);
          this.clearBoxBasedOnExistingNumber(rowNumber, columnNumber, currentSquare.currentNum)
        }
      }
    }
  }
  
  clearRowBasedOnExistingNumber(rowNumber: number, value: numbers) {
    for (let squareIndex = 0; squareIndex < 9; squareIndex++) {
      this.state[rowNumber][squareIndex].clearPossibleNumbers(value);
    }
  }

  clearColumnBasedOnExistingNumber(columnNumber: number, value: numbers) {
    for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
      this.state[rowNumber][columnNumber].clearPossibleNumbers(value);
    }
  }

  clearBoxBasedOnExistingNumber(rowNumber: number, columnNumber: number, value: numbers) {
    const boxFirstRowIndex = this.findBoxIndex(rowNumber);
    const boxFirstColumnIndex = this.findBoxIndex(columnNumber);
    for (let rowCount = 0; rowCount < 3; rowCount++) {
      for (let colummCount = 0; colummCount < 3; colummCount++) {
        this.state[boxFirstRowIndex + rowCount][boxFirstColumnIndex + colummCount].clearPossibleNumbers(value);
      }
    }
  }
  
  display() {
    this.state.forEach((row) => {
      console.log(row.map((data) => data.currentNum));
    })
    console.log('************************************');
  }

  private findBoxIndex(number: number) {
    return number - (number % 3);
  }
}

const mockSudokuBoard = [
  [0, 0, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 9]
]

const mockSudokuBoard2 = [
  [0, 5, 9, 0, 6, 0, 3, 0, 0],
  [0, 2, 0, 1, 0, 4, 0, 0, 7],
  [3, 4, 0, 0, 7, 9, 0, 0, 2],
  [0, 0, 5, 3, 0, 0, 9, 1, 0],
  [0, 0, 7, 0, 0, 0, 6, 0, 0],
  [0, 8, 4, 0, 0, 1, 7, 0, 0],
  [6, 0, 0, 2, 5, 0, 0, 7, 9],
  [5, 0, 0, 9, 0, 3, 0, 8, 0],
  [0, 0, 8, 0, 1, 0, 2, 5, 0]
]