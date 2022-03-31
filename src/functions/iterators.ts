import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { indexes } from "../types";
import { BoxLocation, boxLocationData } from "./box";

export const INDICES_0_TO_8: indexes[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const BOX_INDICES: BoxLocation[] = ['NW', 'N', 'NE', 'W', 'C', 'E', 'SW', 'S', 'SE'];

export const boardIterator = function* (board: Board) {
  for (let rowIndex of INDICES_0_TO_8) {
    for (let columnIndex of INDICES_0_TO_8) {
      yield board.state[rowIndex][columnIndex];
    }
  }
}

export const rowIterator = function* (board: Board, rowNumber: number) {
  for (let square of board.state[rowNumber]) {
    yield square;
  }
}

export const columnIterator = function* (board: Board, columnNumber: number) {
  for (let row of board.state) {
    yield row[columnNumber];
  }
}

export const boxIterator = function* (board: Board, index: BoxLocation) {
  const boxFirstRowIndex = boxLocationData[index].firstRowIndex;
  const boxFirstColumnIndex = boxLocationData[index].firstColumnIndex;
  for (let rowIndex = boxFirstRowIndex; rowIndex < boxFirstRowIndex + 3; rowIndex++) {
    for (let columnIndex = boxFirstColumnIndex; columnIndex < boxFirstColumnIndex + 3; columnIndex++) {
      yield board.state[rowIndex][columnIndex];
    }
  }
}

export const relatedSquaresIterator = function* (board: Board, square: Square) {
  const squareRowNumber = square.location.row;
  const squareColumnNumber = square.location.column;
  const squareBoxLocation = square.location.box;
  for (const currentSquare of boardIterator(board)) {
    let { row, column, box } = currentSquare.location;
    if (
      (row === squareRowNumber || column === squareColumnNumber || box === squareBoxLocation) &&
      !(row === squareRowNumber && column === squareColumnNumber) 
    ) {
      yield currentSquare;
    }
  }
} 
