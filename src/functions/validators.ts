import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { iteratorType, numberType } from "../types";
import { BoxLocation } from "./box";
import { loopThroughBox, loopThroughColumn, loopThroughRelatedSquares, loopThroughRow } from "./iterators";

export const validateRow = function (board: Board, rowIndex: number) {
  let iterationCurrentValues: numberType[] = [];
  const typeOfLoop: iteratorType = 'row';
  const iterationId = rowIndex;
  loopThroughRow(board, rowIndex, validateIteration(iterationCurrentValues, typeOfLoop, iterationId))
};

export const validateColumn = function (board: Board, columnIndex: number) {
  let iterationCurrentValues: numberType[] = [];
  const typeOfLoop: iteratorType = 'column';
  const iterationId = columnIndex;
  loopThroughColumn(board, columnIndex, validateIteration(iterationCurrentValues, typeOfLoop, iterationId))
};

export const validateBox = function (board: Board, boxLocation: BoxLocation) {
  let iterationCurrentValues: numberType[] = [];
  const typeOfLoop: iteratorType = 'box';
  const iterationId = boxLocation;
  loopThroughBox(board, boxLocation, validateIteration(iterationCurrentValues, typeOfLoop, iterationId))
};

export const validateIteration = function (iterationCurrentValues: numberType[], typeOfLoop: string, iterationId: number | string) {
  return (square: Square) => {
    if (square.isFull) {
      if (iterationCurrentValues.includes(square.currentNumber)) {
        throw new Error(`${typeOfLoop} ${iterationId} is invalid`);
      }
      iterationCurrentValues.push(square.currentNumber);
    }
  };
}



export function validateSquare(board: Board, currentSquare: Square) {
  loopThroughRelatedSquares(board, currentSquare, (square) => {
    if (square.isFull) {
      throw new Error(`square ${currentSquare.location.row} ${currentSquare.location.column} is invalid because of square ${square.location.row} ${square.location.column}`);
    }
  });
}