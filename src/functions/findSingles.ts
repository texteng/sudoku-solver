import { xor } from 'lodash';
import { Board } from '../classes/board';
import { Square } from '../classes/square';
import { numberType } from '../types';
import { BoxLocation, translateNumberToBoxLocation } from './box';
import { findPossibles } from './findPossibles';
import { boxIterator, columnIterator, INDICES_0_TO_8, rowIterator } from './iterators';

/*
* This function goes through each row searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function findSinglesRow(board: Board, rowNumber: number): void {
  findSinglesByIterator(board, () => rowIterator(board, rowNumber));
}

/*
* This function goes through each column searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function findSinglesColumn(board: Board, columnNumber: number): void {
  findSinglesByIterator(board, () => columnIterator(board, columnNumber));
}

/*
* This function goes through a wholebox searching through each square's at the possible numbers. 
* If one square has a possible number that is not found in the possible values of all the other squares in that row, then that square will be given that value
*/
export function findSinglesBox(board: Board, index: number | BoxLocation): void {
  const boxLocation = translateNumberToBoxLocation(index);
  findSinglesByIterator(board, () => boxIterator(board, boxLocation));
}

export function findAllSinglesRows(board: Board) {
  for (const index of INDICES_0_TO_8) {
    findSinglesRow(board, index);
  }
}

export function findAllSinglesColumns(board: Board) {
  for (const index of INDICES_0_TO_8) {
    findSinglesColumn(board, index);
  }
}

export function findAllSinglesBoxes(board: Board) {
  for (const index of INDICES_0_TO_8) {
    findSinglesBox(board, index);
  }
}

function findSinglesByIterator(board: Board, iterator: () => Generator<Square>): void {
  const possibleValuesOfSelectedCells: numberType[][] = [];
  for (const square of iterator()) {
    if (!square.isFull) {
      possibleValuesOfSelectedCells.push(square.possibleNumbers);
    }
  }
  
  let uniqueValues = xor(...possibleValuesOfSelectedCells);
  for (const square of iterator()) {
    if (uniqueValues.length === 0 || square.isFull)
      continue;
    for (let uniqueValue of uniqueValues) {
      if (square.possibleNumbers.includes(uniqueValue)) {
        square.currentNumber = uniqueValue;
        findPossibles(board, square);
        break;
      }
    }
  }
}
