import { Board } from "../../src/classes/board";
import { Square } from "../../src/classes/square";
import { rowIterator } from "../../src/functions/iterators";
import { validateBoard, validateSquare } from "../../src/functions/validators";
import { importBoard } from "../../src/types";

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

test('validateBoard should find errors in rows', () => {
  const board = new Board(brokenRow1);
  expect(() => {
    validateBoard(board)
  }).toThrow(new Error('square 0 0 is invalid because of square 0 4'));
});

test('validateSquare should find errors in rows', () => {
  const board = new Board(brokenRow1);
  const testSquare = board.state[0][0];
  expect(() => {
    validateSquare(board, testSquare);
  }).toThrow(new Error('square 0 0 is invalid because of square 0 4'));
});


export const brokenColumn1: importBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

test('validateBoard should find errors in columns', () => {
  const board = new Board(brokenColumn1);
  expect(() => {
    validateBoard(board)
  }).toThrow(new Error('square 1 0 is invalid because of square 6 0'));
});

test('validateSquare should find errors in columns', () => {
  const board = new Board(brokenColumn1);
  const testSquare = board.state[1][0];
  expect(() => {
    validateSquare(board, testSquare);
  }).toThrow(new Error('square 1 0 is invalid because of square 6 0'));
});

export const brokenBox1: importBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

test('validateBoxes should find errors in boxes', () => {
  const board = new Board(brokenBox1);
  expect(() => {
    validateBoard(board)
  }).toThrow(new Error('square 1 1 is invalid because of square 2 2'));
});

test('validateSquare should find errors in boxes', () => {
  const board = new Board(brokenBox1);
  const testSquare = board.state[1][1];
  expect(() => {
    validateSquare(board, testSquare);
  }).toThrow(new Error('square 1 1 is invalid because of square 2 2'));
});

const mockErrorFreeBoard1: importBoard = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 0, 0, 0, 0, 0, 0],
  [7, 8, 9, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 0]
]

test('validateBoard should not find errors in valid board', () => {
  const board = new Board(mockErrorFreeBoard1);
  const testSquare = board.state[0][0];
  expect(() => {
    validateBoard(board);
  }).not.toThrowError();
});

test('validateSquare should not find errors in valid board', () => {
  const board = new Board(mockErrorFreeBoard1);
  const testSquare = board.state[0][0];
  expect(() => {
    validateSquare(board, testSquare);
  }).not.toThrowError();
});

export const validBoard2: importBoard = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

test('validateSquare should mark previously validated squares as true', () => {
  const board = new Board(validBoard2);
  validateSquare(board, board.state[0][0]);
  
  expect(() => {
    board.state[0][0].validated
    
  }).toBe(true);
});