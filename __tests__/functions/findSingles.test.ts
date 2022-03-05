import { Board } from "../../src/classes/board";
import { findAllPossibles } from "../../src/functions/findSimplePossibles";
import { findSinglesBox, findSinglesColumn, findSinglesRow } from "../../src/functions/findSingles";
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

test('findSignlesRow row test created correctly', () => {
  const board = new Board(mockRowBoard1);
  findAllPossibles(board);
  expect(board.state[0][4].possibleNumbers).toHaveLength(3);
  expect(board.state[0][7].possibleNumbers).toHaveLength(2);
  expect(board.state[0][8].possibleNumbers).toHaveLength(2);
});

test('findSignlesRow has correct values for test', () => {
  const board = new Board(mockRowBoard1);
  findAllPossibles(board);
  findSinglesRow(board, 0);
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

test('findSignlesRow test 2 created correctly', () => {
  const board = new Board(mockRowBoard2);
  findAllPossibles(board);
  expect(board.state[0][6].possibleNumbers).toHaveLength(8);
  expect(board.state[0][7].possibleNumbers).toHaveLength(8);
  expect(board.state[0][8].possibleNumbers).toHaveLength(9);
});

test('findSignlesRow test 2 has correct values', () => {
  const board = new Board(mockRowBoard2);
  findAllPossibles(board);
  findSinglesRow(board, 0);
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

test('findSinglesColumn test created correctly', () => {
  const board = new Board(mockColumnBoard1);
  findAllPossibles(board);
  expect(board.state[4][0].possibleNumbers).toHaveLength(3);
  expect(board.state[7][0].possibleNumbers).toHaveLength(2);
  expect(board.state[8][0].possibleNumbers).toHaveLength(2);
});

test('findSinglesColumn has correct values for test', () => {
  const board = new Board(mockColumnBoard1);
  findAllPossibles(board);
  findSinglesColumn(board, 0);
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

test('findSinglesColumn test created correctly', () => {
  const board = new Board(mockColumnBoard2);
  findAllPossibles(board);
  expect(board.state[6][0].possibleNumbers).toHaveLength(8);
  expect(board.state[7][0].possibleNumbers).toHaveLength(8);
  expect(board.state[8][0].possibleNumbers).toHaveLength(9);
});

test('findSinglesColumn has correct values for test', () => {
  const board = new Board(mockColumnBoard2);
  findAllPossibles(board);
  findSinglesColumn(board, 0);
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

test('findSinglesBox test created correctly', () => {
  const board = new Board(mockBoxBoard1);
  findAllPossibles(board);
  expect(board.state[2][0].possibleNumbers).toHaveLength(2);
  expect(board.state[2][1].possibleNumbers).toHaveLength(2);
  expect(board.state[2][2].possibleNumbers).toHaveLength(3);
});

test('findSinglesBox has correct values for test', () => {
  const board = new Board(mockBoxBoard1);
  findAllPossibles(board);
  findSinglesBox(board, 'NW');
  expect(board.state[2][2].currentNumber).toBe('9');
});

