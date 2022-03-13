import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { boardIterator as boardIterator, relatedSquaresIterator } from "./iterators";
import { validateSquare } from "./validators";

/*
* This function goes through the board looking for existing numbers. 
* Once an existing number is found, all of ther squares its row, column and box has that number removed from their possible values
*/
export function findAllPossibles(board: Board): void {
  for (let currentSquare of boardIterator(board)) {
    if (currentSquare.isFull && !currentSquare.possibleNumbersRemovedFromRelatedSquares) {
      try {
        findPossibles(board, currentSquare);
      } catch (e) {
        throw (e);
      }
    }
  }
}

export function findPossibles(board: Board, currentSquare: Square) {
  if (!currentSquare.isFull || currentSquare.possibleNumbersRemovedFromRelatedSquares) return;
  validateSquare(board, currentSquare);
  for (const square of relatedSquaresIterator(board, currentSquare)) {
    square.removePossibleNumber(currentSquare.currentNumber);
  }
  currentSquare.possibleNumbersRemovedFromRelatedSquares = true;
}

