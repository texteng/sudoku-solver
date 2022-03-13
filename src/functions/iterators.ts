import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { BoxLocation, boxLocationData, translateNumberToBoxLocation } from "./box";



export const INDICES_0_TO_8 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const loopThroughRow = function* (board: Board, rowNumber: number) {
  for (let square of board.state[rowNumber]) {
    yield square;
  }
}

export const loopThroughColumn = function* (board: Board, columnNumber: number) {
  for (let row of board.state) {
    yield row[columnNumber];
  }
}

export const loopThroughBox = function* (board: Board, index: BoxLocation| number) {
  const boxLocation = translateNumberToBoxLocation(index);
  const boxFirstRowIndex = boxLocationData[boxLocation].firstRowIndex;
  const boxFirstColumnIndex = boxLocationData[boxLocation].firstColumnIndex;
  for (let rowIndex = boxFirstRowIndex; rowIndex < boxFirstRowIndex + 3; rowIndex++) {
    for (let columnIndex = boxFirstColumnIndex; columnIndex < boxFirstColumnIndex + 3; columnIndex++) {
      yield board.state[rowIndex][columnIndex];
    }
  }
}

export const loopThroughRelatedSquares = function* (board: Board, square: Square) {
  const squareRowNumber = square.location.row;
  const squareColumnNumber = square.location.column;
  const squareBoxLocation = square.location.box;
  for (const boardRow of board.state) {
    for (const currentSquare of boardRow) {
      let { row, column, box } = currentSquare.location;
      if (
        (row === squareRowNumber || column === squareColumnNumber || box === squareBoxLocation) &&
        !(row === squareRowNumber && column === squareColumnNumber) 
      ) {
        yield currentSquare;
      }
    }
  }
} 