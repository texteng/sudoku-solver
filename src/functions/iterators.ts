import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { iterationCallback } from "../types";
import { BoxLocation, boxLocationData, translateNumberToBoxLocation } from "./box";



export const loopThroughRow = function (board: Board, rowNumber: number, callback: iterationCallback) {
  for (let square of board.state[rowNumber]) {
    callback(square);
  }
}

export const loopThroughColumn = function (board: Board, columnNumber: number, callback: iterationCallback) {
  for (let row of board.state) {
    callback(row[columnNumber]);
  }
}

export const loopThroughBox = function (board: Board, index: BoxLocation| number, callback: iterationCallback) {
  const boxLocation = translateNumberToBoxLocation(index);
  const boxFirstRowIndex = boxLocationData[boxLocation].firstRowIndex;
  const boxFirstColumnIndex = boxLocationData[boxLocation].firstColumnIndex;
  for (let rowIndex = boxFirstRowIndex; rowIndex < boxFirstRowIndex + 3; rowIndex++) {
    for (let columnIndex = boxFirstColumnIndex; columnIndex < boxFirstColumnIndex + 3; columnIndex++) {
      callback(board.state[rowIndex][columnIndex]);
    }
  }
}

export const loop0to8 = function (board: Board, callBack: (board: Board, index: number | BoxLocation) => void) {
  for (let index = 0; index < 9; index++) {
    callBack(board, index); // Box location callbacks can convert numbers to with the function translateNumberToBoxLocation();
  }
}

export const loopThroughRelatedSquares = function (board: Board, square: Square, callBack: iterationCallback) {
  const squareRowNumber = square.location.row;
  const squareColumnNumber = square.location.column;
  const squareBoxLocation = square.location.box;
  board.state.forEach((row, rowIndex) => {
    row.forEach((currentSquare, columnIndex) => {
      let { row, column, box } = currentSquare.location;
      if (
        (row === squareRowNumber || column === squareColumnNumber || box === squareBoxLocation) &&
        !(row === squareRowNumber && column === squareColumnNumber) 
      ) {
        callBack(board.state[rowIndex][columnIndex]);
      }
    })
  })
} 