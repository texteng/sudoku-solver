import { Board } from "../classes/board";
import { iterationCallback, numberType } from "../types";
import { loop0to8, loopThroughBox, loopThroughColumn, loopThroughRow } from "./iterators";
import { remove, xor } from "lodash";
import { Square } from "../classes/square";
import { findAllPossibles } from "./findSimplePossibles";
import { BoxLocation, translateNumberToBoxLocation } from "./box";

/*
* This function goes through each row searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function findSinglesRow(board: Board, rowNumber: number): void {
  const possibleValuesOfSelectedCells: numberType[][] = [];
  loopThroughRow(board, rowNumber, getPossibleValuesOfSelectedCells(possibleValuesOfSelectedCells));
  loopThroughRow(board, rowNumber, findSinglesWithinSelectedCells(xor(...possibleValuesOfSelectedCells)));
}

/*
* This function goes through each column searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function findSinglesColumn(board: Board, columnNumber: number): void {
  const possibleValuesOfSelectedCells: numberType[][] = [];
  loopThroughColumn(board, columnNumber, getPossibleValuesOfSelectedCells(possibleValuesOfSelectedCells));
  loopThroughColumn(board, columnNumber, findSinglesWithinSelectedCells(xor(...possibleValuesOfSelectedCells)));
}

/*
* This function goes through a wholebox searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function findSinglesBox(board: Board, index: number | BoxLocation): void {
  const boxLocation = translateNumberToBoxLocation(index);
  const possibleValuesOfSelectedCells: numberType[][] = [];
  loopThroughBox(board, boxLocation, getPossibleValuesOfSelectedCells(possibleValuesOfSelectedCells));
  loopThroughBox(board, boxLocation, findSinglesWithinSelectedCells(xor(...possibleValuesOfSelectedCells)));
}

export function findAllSinglesRows(board: Board) {
  loop0to8(board, (board, index) => {
    findSinglesRow(board, index as number);
    findAllPossibles(board);
  });
}

export function findAllSinglesColumns(board: Board) {
  loop0to8(board, (board, index) => {
    findSinglesColumn(board, index as number);
    findAllPossibles(board);
  });
}

export function findAllSinglesBoxes(board: Board) {
  loop0to8(board, (board, index) => {
    findSinglesBox(board, index);
    findAllPossibles(board);
  });
}

function getPossibleValuesOfSelectedCells(possibleValuesOfAllCells: numberType[][]): iterationCallback {
  return (square) => {
    if (!square.isFull) {
      possibleValuesOfAllCells.push(square.possibleNumbers);
    }
  };
}

function findSinglesWithinSelectedCells(uniqueValues: numberType[]): iterationCallback {
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
