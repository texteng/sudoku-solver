import { Board } from "../classes/board";
import { numberType } from "../types";
import { INDICES_0_TO_8, loopThroughBox, loopThroughColumn, loopThroughRow } from "./iterators";
import { remove, xor } from "lodash";
import { Square } from "../classes/square";
import { findAllPossibles } from "./findPossibles";
import { BoxLocation, translateNumberToBoxLocation } from "./box";

/*
* This function goes through each row searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function findSinglesRow(board: Board, rowNumber: number): void {
  findSinglesByGenerator(() => loopThroughRow(board, rowNumber));
}

/*
* This function goes through each column searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function findSinglesColumn(board: Board, columnNumber: number): void {
  findSinglesByGenerator(() => loopThroughColumn(board, columnNumber));
}

/*
* This function goes through a wholebox searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function findSinglesBox(board: Board, index: number | BoxLocation): void {
  const boxLocation = translateNumberToBoxLocation(index);
  findSinglesByGenerator(() => loopThroughBox(board, boxLocation));
}

export function findAllSinglesRows(board: Board) {
  for (const index of INDICES_0_TO_8) {
    findSinglesRow(board, index);
    findAllPossibles(board);
  }
}

export function findAllSinglesColumns(board: Board) {
  for (const index of INDICES_0_TO_8) {
    findSinglesColumn(board, index);
    findAllPossibles(board);
  }
}

export function findAllSinglesBoxes(board: Board) {
  for (const index of INDICES_0_TO_8) {
    findSinglesBox(board, index);
    findAllPossibles(board);
  }
}

function findSinglesByGenerator(generator: () => Generator<Square>): void {
  const possibleValuesOfSelectedCells: numberType[][] = [];
  for (const square of generator()) {
    if (!square.isFull) {
      possibleValuesOfSelectedCells.push(square.possibleNumbers);
    }
  }
  
  const uniqueValues = xor(...possibleValuesOfSelectedCells);
  for (const square of generator()) {
    if (uniqueValues.length === 0 || square.isFull)
      continue;
    for (let uniqueValue of uniqueValues) {
      if (square.possibleNumbers.includes(uniqueValue)) {
        square.currentNumber = uniqueValue;
        uniqueValue = null;
        remove(uniqueValue, null);
        break;
      }
    }
  }
}
