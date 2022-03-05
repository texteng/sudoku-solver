// This function looks through the possible values of a box, column and row for sets of squares with two possible values.
// If the an identical pair is found within a box, column, or row, than we can eliminate the number for the rest of the box, row, and column.
// Ex  if square one has possible values of 4 and 9, and square two has possible values of 4 and 9
// We can eliminate 4 and 9 from the rest of the squares in a box column or row.

import { cloneDeep, difference } from "lodash";
import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { indexes } from "../types";
import { BoxLocation } from "./box";
import { loopThroughBox } from "./iterators";

export const mapPossibleValuesofSelectedCells = function(squares: Square[]) {
  return squares.filter(square=>!square.isFull).map((square) => square.possibleNumbers);
}

export const updateOriginalBoard = function(board: Board, squareCopies: Square[]) {
  const squareCopiesLength = squareCopies.length;
  for (let index = 0; index < squareCopiesLength; index++) {
    const squareCopy = squareCopies[index];
    board.state[squareCopy.location.row][squareCopy.location.column] = squareCopy;
  }
}

export const mapRow = function (board: Board, rowIndex: indexes) {
  return cloneDeep(board.state[rowIndex]);
}

export const mapColumn = function (board: Board, columnIndex: indexes) {
  return board.state.map((row) => row[columnIndex])
}

export const mapBox = function (board: Board, boxLocation: BoxLocation) {
  let arrayOfSquares: Square[] = [];
  loopThroughBox(board, boxLocation, (square) => {
    arrayOfSquares.push(square);
  })
  return cloneDeep(arrayOfSquares);
}

export const findNakedPairs = function (squares: Square[]) {
  const pairs = squares.filter((square) => square.possibleNumbers.length === 2);
  const nonPairs = squares.filter((square) => square.possibleNumbers.length !== 2);
  if (pairs.length > 1 && difference(pairs).length > 1) {
    
  }
}

export const testFunction = function (squares: Square[]) {
  co
}