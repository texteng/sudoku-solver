import { Board } from "../classes/board";
import { BoxLocation, iterationCallback, navigationIterator } from "../types";



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

export const loopThroughBox = function (board: Board, boxLocation: BoxLocation, callback: iterationCallback) {
  const boxLocationData = {
    'NW': { 'firstRowIndex': 0, 'firstColumnIndex': 0 }, 'N': { 'firstRowIndex': 0, 'firstColumnIndex': 3 }, 'NE': { 'firstRowIndex': 0, 'firstColumnIndex': 6 },
    'W': { 'firstRowIndex': 3, 'firstColumnIndex': 0 }, 'C': { 'firstRowIndex': 3, 'firstColumnIndex': 3 }, 'E': { 'firstRowIndex': 3, 'firstColumnIndex': 6 },
    'SW': { 'firstRowIndex': 6, 'firstColumnIndex': 0 }, 'S': { 'firstRowIndex': 6, 'firstColumnIndex': 3 }, 'SE': { 'firstRowIndex': 6, 'firstColumnIndex': 6 }
  }
  const boxFirstRowIndex = boxLocationData[boxLocation].firstRowIndex;
  const boxFirstColumnIndex = boxLocationData[boxLocation].firstColumnIndex;
  for (let rowIndex = boxFirstRowIndex; rowIndex < boxFirstRowIndex + 3; rowIndex++) {
    for (let columnIndex = boxFirstColumnIndex; columnIndex < boxFirstColumnIndex + 3; columnIndex++) {
      callback(board.state[rowIndex][columnIndex]);
    }
  }
}

