import { Board } from "../../src/classes/board";
import { findAllPossibles } from "../../src/functions/findPossibles";
import { findNakedSquaresColumn, findNakedSquaresRow, findNakedSquaresBox } from "../../src/functions/findNakedPairs";
import { importBoard } from "../../src/types";

const nakedSquaresRowTest: importBoard = [
  [1, 0, 0, 4, 5, 6, 7, 0, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 8, 0, 0, 0, 0, 0, 0]
]

test('getNakedPairsRow board created correctly', () => {
  const board = new Board(nakedSquaresRowTest);
  findAllPossibles(board);
  expect(board.state[0][1].possibleNumbers).toHaveLength(2);
  expect(board.state[0][2].possibleNumbers).toHaveLength(2);
  expect(board.state[0][7].possibleNumbers).toHaveLength(3);
});

test('the possible numbers of getNakedPairsRow should eliminate the possible values from all other squares in the row', () => {
  const board = new Board(nakedSquaresRowTest);
  findAllPossibles(board);
  findNakedSquaresRow(board, 0);
  expect(board.state[0][1].possibleNumbers).toHaveLength(2);
  expect(board.state[0][2].possibleNumbers).toHaveLength(2);
  expect(board.state[0][7].isFull).toBe(true);
  expect(board.state[0][7].currentNumber).toBe('8')
});

const nakedSquaresColumnTest: importBoard = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 9, 0, 0, 0],
  [4, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 9, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

test('getNakedPairsColumn board created correctly', () => {
  const board = new Board(nakedSquaresColumnTest);
  findAllPossibles(board);
  expect(board.state[2][0].possibleNumbers).toHaveLength(2);
  expect(board.state[4][0].possibleNumbers).toHaveLength(2);
  expect(board.state[8][0].possibleNumbers).toHaveLength(3);
});

test('the possible numbers of getNakedPairsColumn should eliminate the possible values from all other squares in the column', () => {
  const board = new Board(nakedSquaresColumnTest);
  findAllPossibles(board);
  findNakedSquaresColumn(board, 0);
  expect(board.state[2][0].possibleNumbers).toHaveLength(2);
  expect(board.state[4][0].possibleNumbers).toHaveLength(2);
  expect(board.state[8][0].isFull).toBe(true);
  expect(board.state[8][0].currentNumber).toBe('9')
});

const nakedSquaresBoxTest: importBoard = [
  [1, 4, 0, 0, 0, 0, 0, 0, 9],
  [2, 5, 0, 0, 0, 9, 0, 0, 0],
  [3, 6, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

test('getNakedPairsBox board created correctly', () => {
  const board = new Board(nakedSquaresBoxTest);
  findAllPossibles(board);
  expect(board.state[0][2].possibleNumbers).toHaveLength(2);
  expect(board.state[1][2].possibleNumbers).toHaveLength(2);
  expect(board.state[2][2].possibleNumbers).toHaveLength(3);
});

test('the possible numbers of getNakedPairsBox should eliminate the possible values from all other squares in the box', () => {
  const board = new Board(nakedSquaresBoxTest);
  findAllPossibles(board);
  findNakedSquaresBox(board, 'NW');
  expect(board.state[0][2].possibleNumbers).toHaveLength(2);
  expect(board.state[1][2].possibleNumbers).toHaveLength(2);
  expect(board.state[2][2].isFull).toBe(true);
  expect(board.state[2][2].currentNumber).toBe('9')
});
