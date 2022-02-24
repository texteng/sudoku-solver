import { Board } from "../classes/board";
import { iterationCallback, numberType } from "../types";
import { loop0to8, loopThroughBox, loopThroughColumn, loopThroughRow } from "./iterators";
import { remove, xor } from "lodash";
import { Square } from "../classes/square";
import { clearPossibleValuesWithExistingNumbers } from "./clearPossibleValuesWithExistingNumbers";
import { BoxLocation, translateNumberToBoxLocation } from "./box";

/*
* This function goes through each row searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function narrowDownPossibleValuesOfRow(board: Board, rowNumber: number): void {
  const possibleValuesOfSelectedCells: numberType[][] = [];
  loopThroughRow(board, rowNumber, getPossibleValuesOfSelectedCells(possibleValuesOfSelectedCells));
  loopThroughRow(board, rowNumber, narrowDownPossibleValues(xor(...possibleValuesOfSelectedCells)));
}

/*
* This function goes through each column searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function narrowDownPossibleValuesOfColumn(board: Board, columnNumber: number): void {
  const possibleValuesOfSelectedCells: numberType[][] = [];
  loopThroughColumn(board, columnNumber, getPossibleValuesOfSelectedCells(possibleValuesOfSelectedCells));
  loopThroughColumn(board, columnNumber, narrowDownPossibleValues(xor(...possibleValuesOfSelectedCells)));
}

/*
* This function goes through a wholebox searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function narrowDownPossibleValuesOfBox(board: Board, index: number | BoxLocation): void {
  const boxLocation = translateNumberToBoxLocation(index);
  const possibleValuesOfSelectedCells: numberType[][] = [];
  loopThroughBox(board, boxLocation, getPossibleValuesOfSelectedCells(possibleValuesOfSelectedCells));
  loopThroughBox(board, boxLocation, narrowDownPossibleValues(xor(...possibleValuesOfSelectedCells)));
}

export function narrowDownAllRows(board: Board) {
  loop0to8(board, (board, index) => {
    narrowDownPossibleValuesOfRow(board, index as number);
    clearPossibleValuesWithExistingNumbers(board);
  });
}

export function narrowDownAllColumns(board: Board) {
  loop0to8(board, (board, index) => {
    narrowDownPossibleValuesOfColumn(board, index as number);
    clearPossibleValuesWithExistingNumbers(board);
  });
}

export function narrowDownAllBoxes(board: Board) {
  loop0to8(board, (board, index) => {
    narrowDownPossibleValuesOfBox(board, index);
    clearPossibleValuesWithExistingNumbers(board);
  });
}

function getPossibleValuesOfSelectedCells(possibleValuesOfAllCells: numberType[][]): iterationCallback {
  return (square) => {
    if (!square.isFull) {
      possibleValuesOfAllCells.push(square.possibleNumbers);
    }
  };
}

function narrowDownPossibleValues(uniqueValues: numberType[]): iterationCallback {
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
