import { Board } from '../../src/classes/board';
import { Square } from '../../src/classes/square';
import { importBoard } from '../../src/types';
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
  for (let rowIndex in board.state) {
    for (let columnIndex in board.state[rowIndex]) {
      doesBlankSquareHaveCorrectFields( board.state[rowIndex][columnIndex], rowIndex, columnIndex);
    }
  }
  expect(board.state[0][0].location.row).toBe(0);
  expect(board.state[0][0].location.column).toBe(0);
  expect(board.state[0][0].location.box).toBe('NW');
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
        doesBlankSquareHaveCorrectFields(square, rowIndex, columnIndex);
      }
    }
  }
});

function doesBlankSquareHaveCorrectFields(square: Square, rowIndex:string, columnIndex: string) {
  const rowIndexNumber = parseInt(rowIndex, 10);
  const columnIndexNumber = parseInt(columnIndex, 10);
  expect(square.currentNumber).toBe(null);
  expect(square.isFull).toBe(false);
  expect(square.possibleNumbers).toHaveLength(9);
  expect(square.possibleNumbersRemovedFromRelatedSquares).toBe(false);
  expect(square.location.row).toBe(rowIndexNumber);
  expect(square.location.column).toBe(columnIndexNumber);
  expect(square.location.box).toBe(BoxTestArray[rowIndexNumber][columnIndexNumber]);
}

const BoxTestArray = [
  ['NW', 'NW', 'NW', 'N', 'N', 'N', 'NE', 'NE', 'NE'],
  ['NW', 'NW', 'NW', 'N', 'N', 'N', 'NE', 'NE', 'NE'],
  ['NW', 'NW', 'NW', 'N', 'N', 'N', 'NE', 'NE', 'NE'],
  ['W', 'W', 'W', 'C', 'C', 'C', 'E', 'E', 'E'],
  ['W', 'W', 'W', 'C', 'C', 'C', 'E', 'E', 'E'],
  ['W', 'W', 'W', 'C', 'C', 'C', 'E', 'E', 'E'],
  ['SW', 'SW', 'SW', 'S', 'S', 'S', 'SE', 'SE', 'SE'],
  ['SW', 'SW', 'SW', 'S', 'S', 'S', 'SE', 'SE', 'SE'],
  ['SW', 'SW', 'SW', 'S', 'S', 'S', 'SE', 'SE', 'SE'],
]