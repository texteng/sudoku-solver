import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { iteratorType, numberType } from "../types";
import { BoxLocation } from "./box";
import { boxIterator, columnIterator, relatedSquaresIterator, rowIterator } from "./iterators";

export const validateRow = function (board: Board, rowIndex: number) {
  let iterationCurrentValues: numberType[] = [];
  const typeOfLoop: iteratorType = 'row';
  const iterationId = rowIndex;
  validateIteration(iterationCurrentValues, typeOfLoop, iterationId, rowIterator(board, rowIndex));
};

export const validateColumn = function (board: Board, columnIndex: number) {
  let iterationCurrentValues: numberType[] = [];
  const typeOfLoop: iteratorType = 'column';
  const iterationId = columnIndex;
  validateIteration(iterationCurrentValues, typeOfLoop, iterationId, columnIterator(board, columnIndex))
};

export const validateBox = function (board: Board, boxLocation: BoxLocation) {
  let iterationCurrentValues: numberType[] = [];
  const typeOfLoop: iteratorType = 'box';
  const iterationId = boxLocation;
  validateIteration(iterationCurrentValues, typeOfLoop, iterationId, boxIterator(board, boxLocation))
};

export const validateIteration = function (
  iterationCurrentValues: numberType[], 
  typeOfLoop: string, 
  iterationId: number | string,
  generator: Generator<Square>
) {
  for (const square of generator) {
    if (square.isFull) {
      if (iterationCurrentValues.includes(square.currentNumber)) {
        throw new Error(`${typeOfLoop} ${iterationId} is invalid`);
      }
      iterationCurrentValues.push(square.currentNumber);
    }
  }
}

export function validateSquare(board: Board, currentSquare: Square, hardValidate = true) {
  if (hardValidate && currentSquare.validated) return;
  if (!currentSquare.isFull) return;
  for (const square of relatedSquaresIterator(board, currentSquare)) {
    if (square.isFull && square.currentNumber === currentSquare.currentNumber) {
      throw new Error(`square ${currentSquare.location.row} ${currentSquare.location.column} is invalid because of square ${square.location.row} ${square.location.column}`);
    }
  }
  if (hardValidate) {
    currentSquare.validated = true;
  }
  
}