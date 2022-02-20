import { Board } from "../classes/board";

/*
* This function goes through the board looking for existing numbers. 
* Once an existing number is found, all of ther squares its row, column and box has that number removed from their possible values
*/
export function clearPossibleValuesWithExistingNumbers(board: Board): void {
  for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
    for (let columnNumber = 0; columnNumber < 9; columnNumber++) {
      let currentSquare = board.state[rowNumber][columnNumber];
      if (currentSquare.isFull && !currentSquare.possibleNumbersRemovedFromRelatedSquares) {
        for (let count = 0; count < 9; count++) {
          // Clears the possible number out of row
          board.state[rowNumber][count].removePossibleNumber(currentSquare.currentNumber);

          // Clears the possible number out of column
          board.state[count][columnNumber].removePossibleNumber(currentSquare.currentNumber);

        }
        // Clears possible number out of box
        const boxFirstRowIndex = rowNumber - (rowNumber % 3);
        const boxFirstColumnIndex = columnNumber - (columnNumber % 3);
        for (let rowCount = 0; rowCount < 3; rowCount++) {
          if (rowCount !== rowNumber) {
            for (let colummCount = 0; colummCount < 3; colummCount++) {
              if (colummCount !== columnNumber) {
                board.state[boxFirstRowIndex + rowCount][boxFirstColumnIndex + colummCount].removePossibleNumber(currentSquare.currentNumber);
              }
            }
          }
        }
        currentSquare.possibleNumbersRemovedFromRelatedSquares = true;
      }
    }
  }
}