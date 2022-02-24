import { Board } from "../../src/classes/board";
import { clearPossibleValuesWithExistingNumbers } from "../../src/functions/clearPossibleValuesWithExistingNumbers";
import { narrowDownPossibleValuesOfBox, narrowDownPossibleValuesOfColumn, narrowDownPossibleValuesOfRow } from "../../src/functions/narrowDownPossibleValues";
import { importBoard } from "../../src/types";

const mockRowBoard1: importBoard = [
  [1, 2, 3, 4, 0, 6, 7, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

test('narrowDownPossibleValuesOfRow row test 1 created correctly', () => {
  const board = new Board(mockRowBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  expect(board.state[0][4].possibleNumbers).toHaveLength(3);
  expect(board.state[0][7].possibleNumbers).toHaveLength(2);
  expect(board.state[0][8].possibleNumbers).toHaveLength(2);
});

test('narrowDownPossibleValuesOfRow has correct values for row test 1', () => {
  const board = new Board(mockRowBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  narrowDownPossibleValuesOfRow(board, 0);
  expect(board.state[0][4].currentNumber).toBe('5');
});

const mockRowBoard2: importBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 9, 0, 0, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 9, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 9, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

test('narrowDownPossibleValuesOfRow row test 2 created correctly', () => {
  const board = new Board(mockRowBoard2);
  clearPossibleValuesWithExistingNumbers(board);
  expect(board.state[0][6].possibleNumbers).toHaveLength(8);
  expect(board.state[0][7].possibleNumbers).toHaveLength(8);
  expect(board.state[0][8].possibleNumbers).toHaveLength(9);
});

test('narrowDownPossibleValuesOfRow row test 2 has correct values', () => {
  const board = new Board(mockRowBoard2);
  clearPossibleValuesWithExistingNumbers(board);
  narrowDownPossibleValuesOfRow(board, 0);
  expect(board.state[0][8].currentNumber).toBe('9');
});


const mockColumnBoard1: importBoard = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 0]
]

test('narrowDownPossibleValues column test 1 created correctly', () => {
  const board = new Board(mockColumnBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  expect(board.state[4][0].possibleNumbers).toHaveLength(3);
  expect(board.state[7][0].possibleNumbers).toHaveLength(2);
  expect(board.state[8][0].possibleNumbers).toHaveLength(2);
});

test('narrowDownPossibleValues has correct values for column test 1', () => {
  const board = new Board(mockColumnBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  narrowDownPossibleValuesOfColumn(board, 0);
  expect(board.state[4][0].currentNumber).toBe('5');
});

const mockColumnBoard2: importBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 9, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 9, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

test('narrowDownPossibleValues column test 1 created correctly', () => {
  const board = new Board(mockColumnBoard2);
  clearPossibleValuesWithExistingNumbers(board);
  expect(board.state[6][0].possibleNumbers).toHaveLength(8);
  expect(board.state[7][0].possibleNumbers).toHaveLength(8);
  expect(board.state[8][0].possibleNumbers).toHaveLength(9);
});

test('narrowDownPossibleValues has correct values for column test 1', () => {
  const board = new Board(mockColumnBoard2);
  clearPossibleValuesWithExistingNumbers(board);
  narrowDownPossibleValuesOfColumn(board, 0);
  expect(board.state[8][0].currentNumber).toBe('9');
});

const mockBoxBoard1: importBoard = [
  [1, 2, 3, 0, 0, 0, 0, 0, 0],
  [4, 5, 6, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

test('narrowDownPossibleValues box test 1 created correctly', () => {
  const board = new Board(mockBoxBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  expect(board.state[2][0].possibleNumbers).toHaveLength(2);
  expect(board.state[2][1].possibleNumbers).toHaveLength(2);
  expect(board.state[2][2].possibleNumbers).toHaveLength(3);
});

test('narrowDownPossibleValues has correct values for column test 1', () => {
  const board = new Board(mockBoxBoard1);
  clearPossibleValuesWithExistingNumbers(board);
  narrowDownPossibleValuesOfBox(board, 'NW');
  expect(board.state[2][2].currentNumber).toBe('9');
});


export const brokenRow1: importBoard = [
  [1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

// test('clearPossibleValuesWithExistingNumbers should validate squares', () => {
//   const board = new Board(brokenRow1);
//   const testSquare = board.state[0][0];
//   expect(() => {
//     clearPossibleValuesWithExistingNumbers(board);
//   }).toThrow(new Error('square 0 0 is invalid because of square 0 4'));
// });