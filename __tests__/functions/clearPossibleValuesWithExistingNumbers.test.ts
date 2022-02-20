import { Board } from "../../src/classes/board";
import { Square } from "../../src/classes/square";
import { clearPossibleValuesWithExistingNumbers } from "../../src/functions/clearPossibleValuesWithExistingNumbers";
import { importBoard, numbers } from "../../src/types";

const mockBoard1: importBoard = [
  [0, 0, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

test.only('eliminatePossibleValuesWithExistingNumbers should set set possibleNumbersRemovedFromRelatedSquares variable to true', () => {
  const board = new Board(mockBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  expect(board.state[0][4].possibleNumbersRemovedFromRelatedSquares).toBe(true);
});

test('eliminatePossibleValuesWithExistingNumbers should clear possible values from row', () => {
  const board = new Board(mockBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  for (let squareIndex in board.state[0]) {
    if (squareIndex !== '4') {
      let square = board.state[0][squareIndex];
      squareShouldHaveNumberRemoved(square, '4');
    }
  } 
});

test('eliminatePossibleValuesWithExistingNumbers should clear possible values from column', () => {
  const board = new Board(mockBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  for (let rowIndex in board.state[0]) {
    if (rowIndex !== '0') {
      let square = board.state[rowIndex][4];
      squareShouldHaveNumberRemoved(square, '4');
    }
  } 
});

test('eliminatePossibleValuesWithExistingNumbers should clear possible values from box', () => {
  const board = new Board(mockBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let columnIndex = 3; columnIndex < 6; columnIndex++) {
      if (rowIndex !== 0 || columnIndex !== 4) {
        let square = board.state[rowIndex][columnIndex];
        squareShouldHaveNumberRemoved(square, '4');
      }
    }
  } 
});

test('eliminatePossibleValuesWithExistingNumbers should not clear possible values from unrelated boxes', () => {
  const board = new Board(mockBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  // first row is tested elsewhere
  for (let rowIndex = 1; rowIndex < 9; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      let square = board.state[rowIndex][columnIndex];
      if (columnIndex !== 4 && (rowIndex > 2 || (columnIndex !== 3 && columnIndex !== 5))) {
        doesBlankSquareHaveCorrectFields(square);
      } else {
        // 
        squareShouldHaveNumberRemoved(square, '4'); // squares that are eliminated should still have 4 removed
      }
    }
  } 
});

const mockBoard2: importBoard = [
  [0, 0, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 9]
]

test('eliminatePossibleValuesWithExistingNumbers can clear multiple numbers out of a square', () => {
  const board = new Board(mockBoard2);
  clearPossibleValuesWithExistingNumbers(board);
  // first row is tested elsewhere
  let topRightSquare = board.state[0][8];
  expect(topRightSquare.possibleNumbers.includes('4')).toBe(false);
  expect(topRightSquare.possibleNumbers.includes('9')).toBe(false);
  expect(topRightSquare.currentNumber).toBe(null);
  expect(topRightSquare.isFull).toBe(false);
  expect(topRightSquare.possibleNumbers).toHaveLength(7);
  let middleBottomSquare = board.state[8][4];
  expect(middleBottomSquare.possibleNumbers).toHaveLength(7);
});



function squareShouldHaveNumberRemoved(square: Square, number: numbers) {
  expect(square.possibleNumbers.includes(number)).toBe(false);
  // // The rest of these have been tested
  // expect(square.currentNumber).toBe(null);
  // expect(square.isFull).toBe(false);
  // expect(square.possibleNumbers).toHaveLength(8);
}

function doesBlankSquareHaveCorrectFields(square: Square) {
  expect(square.currentNumber).toBe(null);
  expect(square.isFull).toBe(false);
  expect(square.possibleNumbers).toHaveLength(9);
  expect(square.possibleNumbersRemovedFromRelatedSquares).toBe(false);
}
