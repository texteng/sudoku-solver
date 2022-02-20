import { Board } from "../classes/board";
import { BoxLocation, iterationCallback, numbers } from "../types";
import { loopThroughBox, loopThroughColumn, loopThroughRow } from "./iterators";
import { remove, xor } from "lodash";
import { Square } from "../classes/square";
import { clearPossibleValuesWithExistingNumbers } from "./clearPossibleValuesWithExistingNumbers";

/*
* This function goes through each row searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function narrowDownPossibleValuesOfRow(board: Board, rowNumber: number): void {
  const possibleValuesOfSelectedCells: numbers[][] = [];
  loopThroughRow(board, rowNumber, getPossibleValuesOfSelectedCells(possibleValuesOfSelectedCells));
  loopThroughRow(board, rowNumber, narrowDownPossibleValues(xor(...possibleValuesOfSelectedCells)));
}

/*
* This function goes through each column searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function narrowDownPossibleValuesOfColumn(board: Board, columnNumber: number): void {
  const possibleValuesOfSelectedCells: numbers[][] = [];
  loopThroughColumn(board, columnNumber, getPossibleValuesOfSelectedCells(possibleValuesOfSelectedCells));
  loopThroughColumn(board, columnNumber, narrowDownPossibleValues(xor(...possibleValuesOfSelectedCells)));
}

/*
* This function goes through a wholebox searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function narrowDownPossibleValuesOfBox(board: Board, boxLocation: BoxLocation): void {
  const possibleValuesOfSelectedCells: numbers[][] = [];
  loopThroughBox(board, boxLocation, getPossibleValuesOfSelectedCells(possibleValuesOfSelectedCells));
  loopThroughBox(board, boxLocation, narrowDownPossibleValues(xor(...possibleValuesOfSelectedCells)));
}

export function narrowDownAllRows(board: Board) {
  for (let rowLocation = 0; rowLocation < 9; rowLocation++) {
    narrowDownPossibleValuesOfRow(board, rowLocation);
    clearPossibleValuesWithExistingNumbers(board);
  }
}

export function narrowDownAllColumns(board: Board) {
  for (let columnLocation = 0; columnLocation < 9; columnLocation++) {
    narrowDownPossibleValuesOfColumn(board, columnLocation);
    clearPossibleValuesWithExistingNumbers(board);
  }
}

export function narrowDownAllBoxes(board: Board) {
  const boxLocations: BoxLocation[] = ['NW', 'N', 'NE', 'W', 'C', 'E', 'SW', 'S', 'SE']
  for (let boxLocation of boxLocations) {
    narrowDownPossibleValuesOfBox(board, boxLocation);
    clearPossibleValuesWithExistingNumbers(board);
  }
}

function getPossibleValuesOfSelectedCells(possibleValuesOfAllCells: numbers[][]): iterationCallback {
  return (square) => {
    if (!square.isFull) {
      possibleValuesOfAllCells.push(square.possibleNumbers);
    }
  };
}

function narrowDownPossibleValues(uniqueValues: numbers[]): iterationCallback {
  return (square: Square) => {
    if (uniqueValues.length === 0 || square.isFull)
      return;
    for (let uniqueValue of uniqueValues) {
      if (square.possibleNumbers.includes(uniqueValue)) {
        square.currentNumber = uniqueValue;
        uniqueValue = null;
        remove(uniqueValue, null);
        break;
      }
    }
  };
}
