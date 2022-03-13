import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { loopThroughRelatedSquares } from "./iterators";
import { validateSquare } from "./validators";

/*
* This function goes through the board looking for existing numbers. 
* Once an existing number is found, all of ther squares its row, column and box has that number removed from their possible values
*/
export function findAllPossibles(board: Board): void {
  for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
    for (let columnNumber = 0; columnNumber < 9; columnNumber++) {
      let currentSquare = board.state[rowNumber][columnNumber];
      if (currentSquare.isFull && !currentSquare.possibleNumbersRemovedFromRelatedSquares) {
        try {
          findPossibles(board, currentSquare);
        } catch (e) {
          throw (e);
        }
      }
    }
  }
}

export function findPossibles(board: Board, currentSquare: Square) {
  if (!currentSquare.isFull || currentSquare.possibleNumbersRemovedFromRelatedSquares) return;
  validateSquare(board, currentSquare);
  for (const square of loopThroughRelatedSquares(board, currentSquare)) {
    square.removePossibleNumber(currentSquare.currentNumber);
  }
  currentSquare.possibleNumbersRemovedFromRelatedSquares = true;
}

