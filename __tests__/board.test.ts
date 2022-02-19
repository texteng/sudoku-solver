import { Board } from '../src/classes/board';
import { Square } from '../src/classes/square';
import { importBoard } from '../src/types';
// import { easyBoard1 } from '../mockBoards';
let board: Board;

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

test('Board Created', () => {
  board = new Board(blankBoard);
  expect(board).toBeTruthy();
});

test('Board should be 9 X 9', () => {
  board = new Board(blankBoard);
  expect(board.state).toHaveLength(9);
  for (let row of board.state) {
    expect(row).toHaveLength(9);
  }
});

test('Blank board state should have correct fields', () => {
  board = new Board(blankBoard);
  for (let row of board.state) {
    for (let square of row) {
      doesBlackSquareHaveCorrectFields(square);
    }
  }
});

const mockBoard1: importBoard = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 7, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 8, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 9]
]

test('Mock board state have correct fields', () => {
  board = new Board(mockBoard1);
  for (let rowIndex in board.state) {
    for (let columnIndex in board.state[rowIndex]) {
      const square = board.state[rowIndex][columnIndex];
      if (rowIndex === columnIndex) {
        expect(square.currentNumber).toBe(`${parseInt(rowIndex, 10) + 1}`);
        expect(square.isFull).toBe(true);
      } else {
        doesBlackSquareHaveCorrectFields(square);
      }
    }
  }
});


function doesBlackSquareHaveCorrectFields(square: Square) {
  expect(square.currentNumber).toBe(null);
  expect(square.isFull).toBe(false);
  expect(square.possibleNumbers).toHaveLength(9);
}

