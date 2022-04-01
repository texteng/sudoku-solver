import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { iteratorType, numberType } from "../types";
import { BoxLocation } from "./box";
import { boardIterator, boxIterator, columnIterator, relatedSquaresIterator, rowIterator } from "./iterators";

export function validateSquare(board: Board, currentSquare: Square, hardValidate = true) {
  if (!currentSquare.isFull || (hardValidate && currentSquare.validated)) return;
  for (const square of relatedSquaresIterator(board, currentSquare)) {
    if (square.isFull && square.currentNumber === currentSquare.currentNumber) {
      board.valid = false;
      throw new Error(`square ${currentSquare.location.row} ${currentSquare.location.column} is invalid because of square ${square.location.row} ${square.location.column}`);
    }
  }
  if (hardValidate) {
    currentSquare.validated = true;
  }
}

export function validateBoard(board: Board, hardValidate = true) {
  for (let square of boardIterator(board)) {
    validateSquare(board, square, hardValidate);
  }
}
