import { Board } from "../../src/classes/board";
import { importBoard, numbers1to9, numberType } from "../../src/types";
import { columnIterator, rowIterator, boxIterator, relatedSquaresIterator, boardIterator as boardIterator } from "../../src/functions/iterators"

const blankBoard: importBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]


test('boardIterator should loop though all squares', () => {
  const board = new Board(blankBoard);
  let count = 0;
  for (const square of boardIterator(board)) {
    expect(square.isFull).toBe(false);
    count++;
  }
  expect(count).toEqual(81);
}) 

const mockBoardRows1: importBoard = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [9, 8, 7, 6, 5, 4, 3, 2, 1]
]

test('callback function in rowIterator should receive each square in top row.', () => {
  const board = new Board(mockBoardRows1);
  let count = 0;
  for (const square of rowIterator(board, 0)) {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  }
  expect(count).toBe(9);
});

test('callback function in rowIterator should receive each square in bottom row.', () => {
  const board = new Board(mockBoardRows1);
  let count = 9;
  for (const square of rowIterator(board, 8)) {
    expect(square.currentNumber).toBe(`${count}`);
    count--;
  }
  expect(count).toBe(0);
});

test('callback function in rowIterator should change each square in top row.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9  = 1;
  for (const square of rowIterator(board, 0)) {
    square.currentNumber = `${countCreate}` as numberType;
    countCreate++;
  }
  expect(countCreate).toBe(10);
  let countTest = 0;
  for (const square of rowIterator(board, 0)) {
    countTest++;
    expect(square.currentNumber).toBe(`${countTest}`);
  }
  expect(countTest).toBe(9);
});

test('callback function in rowIterator should change each square on bottom row.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9 = 9;
  for (const square of rowIterator(board, 8)) {
    square.currentNumber = `${countCreate}` as numberType;
    countCreate--;
  }
  expect(countCreate).toBe(0);
  let countTest = 9;
  for (const square of rowIterator(board, 8)) {
    expect(square.currentNumber).toBe(`${countTest}`);
    countTest--;
  }
  expect(countCreate).toBe(0);
});

const mockBoardColumns1: importBoard = [
  [1, 0, 0, 0, 0, 0, 0, 0, 9],
  [2, 0, 0, 0, 0, 0, 0, 0, 8],
  [3, 0, 0, 0, 0, 0, 0, 0, 7],
  [4, 0, 0, 0, 0, 0, 0, 0, 6],
  [5, 0, 0, 0, 0, 0, 0, 0, 5],
  [6, 0, 0, 0, 0, 0, 0, 0, 4],
  [7, 0, 0, 0, 0, 0, 0, 0, 3],
  [8, 0, 0, 0, 0, 0, 0, 0, 2],
  [9, 0, 0, 0, 0, 0, 0, 0, 1]
]

test('callback function in columnIterator should receive each square in first column.', () => {
  const board = new Board(mockBoardColumns1);
  let count = 0;
  for (const square of columnIterator(board, 0)) {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  }
  expect(count).toBe(9);
});

test('callback function in columnIterator should receive each square in last column.', () => {
  const board = new Board(mockBoardColumns1);
  let count = 9;
  for (const square of columnIterator(board, 8)) {
    expect(square.currentNumber).toBe(`${count}`);
    count--;
  }
  expect(count).toBe(0);
});

test('callback function in columnIterator should change each square in first column', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9  = 1;
  for (const square of columnIterator(board, 0)) {
    square.currentNumber = `${countCreate}` as numberType;
    countCreate++;
  }
  expect(countCreate).toBe(10);
  let countTest = 0;
  for (const square of columnIterator(board, 0)) {
    countTest++;
    expect(square.currentNumber).toBe(`${countTest}`);
  }
  expect(countTest).toBe(9);
});

test('callback function in columnIterator should change each square on last column.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9 = 9;
  for (const square of columnIterator(board, 8)) {
    square.currentNumber = `${countCreate}` as numberType;
    countCreate--;
  }
  expect(countCreate).toBe(0);
  let countTest = 9;
  for (const square of columnIterator(board, 8)) {
    expect(square.currentNumber).toBe(`${countTest}`);
    countTest--;
  }
  expect(countTest).toBe(0);
});

const mockBoardBox1: importBoard = [
  [1, 2, 3, 0, 0, 0, 0, 0, 0],
  [4, 5, 6, 0, 0, 0, 0, 0, 0],
  [7, 8, 9, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 3, 0, 0, 0],
  [0, 0, 0, 4, 5, 6, 0, 0, 0],
  [0, 0, 0, 7, 8, 9, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 2, 3],
  [0, 0, 0, 0, 0, 0, 4, 5, 6],
  [0, 0, 0, 0, 0, 0, 7, 8, 9]
]


test('callback function in boxIterator should receive each square in northwest box.', () => {
  const board = new Board(mockBoardBox1);
  let count = 0;

  for (const square of boxIterator(board, 'NW')) {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  }
  expect(count).toBe(9);
});

test('callback function in boxIterator should receive each square in center box.', () => {
  const board = new Board(mockBoardBox1);
  let count = 0;

  for (const square of boxIterator(board, 'C')) {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  }
  expect(count).toBe(9);
});

test('callback function in boxIterator should receive each square in southeast box.', () => {
  const board = new Board(mockBoardBox1);
  let count = 0;

  for (const square of boxIterator(board, 'SE')) {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  }
  expect(count).toBe(9);
});

test('callback function in boxIterator should change each square in northwest box', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9  = 1;
  for (const square of boxIterator(board, 'NW')) {
    square.currentNumber = `${countCreate}` as numberType;
    countCreate++;
  }
  expect(countCreate).toBe(10);
  let countTest = 0;
  for (const square of boxIterator(board, 'NW')) {
    countTest++;
    expect(square.currentNumber).toBe(`${countTest}`);
  }
  expect(countTest).toBe(9);
});

test('callback function in boxIterator should change each square in center box.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9 = 9;
  for (const square of boxIterator(board, 'C')) {
    square.currentNumber = `${countCreate}` as numberType;
    countCreate--;
  }
  expect(countCreate).toBe(0);
  let countTest = 9;
  for (const square of boxIterator(board, 'C')) {
    expect(square.currentNumber).toBe(`${countTest}`);
    countTest--;
  }
  expect(countTest).toBe(0);
});

test('callback function in boxIterator should change each square on southeast box.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9 = 9;
  for (const square of boxIterator(board, 'SE')) {
    square.currentNumber = `${countCreate}` as numberType;
    countCreate--;
  }
  expect(countCreate).toBe(0);
  let countTest = 9;
  for (const square of boxIterator(board, 'SE')) {
    expect(square.currentNumber).toBe(`${countTest}`);
    countTest--;
  }
  expect(countTest).toBe(0);
});

const relatedSquaresBoard1: importBoard = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 9, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0]
]

test('relatedSquaresIterator should loop through all squares related to given square, and it should not go though given square', () => {
  const board = new Board(relatedSquaresBoard1);
  const testSquare = board.state[4][4];
  let count = 0;
  for (const square of relatedSquaresIterator(board, testSquare)) {
    expect(square.isFull).toBe(true);
    expect(square.currentNumber).toBe('1');
    count++;
  }
  expect(count).toEqual(20);
})
