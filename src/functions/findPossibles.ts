import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { boardIterator, relatedSquaresIterator } from "./iterators";
import { validateSquare } from "./validators";

/*
* This function goes through the board looking for existing numbers. 
* Once an existing number is found, all of ther squares its row, column and box has that number removed from their possible values
*/
export function findAllPossibles(board: Board): void {
  for (let currentSquare of boardIterator(board)) {
    if (currentSquare.isFull && !currentSquare.possibleNumbersRemovedFromRelatedSquares) {
      try {
        if (findPossibles(board, currentSquare)) {
          // if something changed, restart function;
          findAllPossibles(board); 
          return;
        }
      } catch (e) {
        throw (e);
      }
    }
  }
}

export function findPossibles(board: Board, currentSquare: Square) {
  if (!currentSquare.isFull || currentSquare.possibleNumbersRemovedFromRelatedSquares) return;
  // validateSquare(board, currentSquare);
  let changedSomething = false;
  for (const square of relatedSquaresIterator(board, currentSquare)) {
    if (square.removePossibleNumber(currentSquare.currentNumber)) changedSomething = true;
  }
  currentSquare.possibleNumbersRemovedFromRelatedSquares = true;
  return changedSomething;
}

