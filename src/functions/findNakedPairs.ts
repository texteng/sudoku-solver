import { isEqual } from "lodash";

import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { BoxLocation } from "./box";
import { findAllPossibles } from "./findPossibles";
import {
  boxIterator,
  BOX_INDICES,
  columnIterator,
  INDICES_0_TO_8,
  rowIterator,
} from "./iterators";

export function findAllNakedSquaresRows(board: Board) {
  // findAllPossibles(board);
  for (const index of INDICES_0_TO_8) {
    findNakedSquaresRow(board, index);
  }
  findAllPossibles(board);
}

export function findAllNakedSquaresColumns(board: Board) {
  // findAllPossibles(board);
  for (const index of INDICES_0_TO_8) {
    findNakedSquaresColumn(board, index);
  }
  findAllPossibles(board);
}

export function findAllNakedSquaresBoxes(board: Board) {
  // findAllPossibles(board);
  for (const index of BOX_INDICES) {
    findNakedSquaresBox(board, index);
  }
  findAllPossibles(board);
}

/*
 * This function goes through a box, row or column looking for squares with two possible numbers
 * If another box in the interation also has two possible numbers, and these possible numbers are the same
 * then we can eliminate these possible numbers in the rest of the iteratoin
 */
export function findNakedSquaresRow(board: Board, rowNumber: number): void {
  findNakedSquaresByIterator(() => rowIterator(board, rowNumber));
}

export function findNakedSquaresColumn(
  board: Board,
  columnNumber: number
): void {
  findNakedSquaresByIterator(() => columnIterator(board, columnNumber));
}

export function findNakedSquaresBox(
  board: Board,
  boxLocation: BoxLocation
): void {
  findNakedSquaresByIterator(() => boxIterator(board, boxLocation));
}

export function findNakedSquaresByIterator(
  iterator: () => Generator<Square>
): void {
  let squaresWithPairs = [];
  for (let square of iterator()) {
    if (square.possibleNumbers.length === 2) {
      squaresWithPairs.push(square);
    }
  }
  if (squaresWithPairs.length <= 1) {
    return;
  }
  const repeatingSquares = findRepeatingSquares(squaresWithPairs);
  if (repeatingSquares.length <= 0) {
    return;
  }

  for (let square of iterator()) {
    if (
      !square.isFull &&
      !isEqual(square.possibleNumbers, repeatingSquares[0].possibleNumbers)
    ) {
      for (const number of repeatingSquares[0].possibleNumbers) {
        square.removePossibleNumber(number);
      }
    }
  }
}

function findRepeatingSquares(squaresWithPairs: Square[]) {
  var i, j;
  const squaresWithPairsLength = squaresWithPairs.length;
  for (i = 0; i < squaresWithPairsLength - 1; i++) {
    for (j = i + 1; j < squaresWithPairsLength; j++) {
      if (
        isEqual(
          squaresWithPairs[i].possibleNumbers,
          squaresWithPairs[j].possibleNumbers
        )
      ) {
        return [squaresWithPairs[i], squaresWithPairs[j]];
      }
    }
  }
  return [];
}
