import { Board } from "../classes/board";
import { Square } from "../classes/square";
import { BoxLocation, iteratorType, numbers } from "../types";
import { loopThroughBox, loopThroughColumn, loopThroughRow } from "./iterators";

export const validateRow = function (board: Board, rowIndex: number) {
  let iterationCurrentValues: numbers[] = [];
  const typeOfLoop: iteratorType = 'row';
  const iterationId = rowIndex;
  loopThroughRow(board, rowIndex, validateIterator(iterationCurrentValues, typeOfLoop, iterationId))
};

export const validateColumn = function (board: Board, columnIndex: number) {
  let iterationCurrentValues: numbers[] = [];
  const typeOfLoop: iteratorType = 'column';
  const iterationId = columnIndex;
  loopThroughColumn(board, columnIndex, validateIterator(iterationCurrentValues, typeOfLoop, iterationId))
};

export const validateBox = function (board: Board, boxLocation: BoxLocation) {
  let iterationCurrentValues: numbers[] = [];
  const typeOfLoop: iteratorType = 'box';
  const iterationId = boxLocation;
  loopThroughBox(board, boxLocation, validateIterator(iterationCurrentValues, typeOfLoop, iterationId))
};

function validateIterator(iterationCurrentValues: numbers[], typeOfLoop: string, iterationId: number | string) {
  return (square: Square) => {
    if (square.isFull) {
      if (iterationCurrentValues.includes(square.currentNumber)) {
        throw new Error(`${typeOfLoop} ${iterationId} is invalid`);
      }
      iterationCurrentValues.push(square.currentNumber);
    }
  };
}
