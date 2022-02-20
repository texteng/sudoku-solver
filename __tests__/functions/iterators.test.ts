import { Board } from "../../src/classes/board";
import { Square } from "../../src/classes/square";
import { importBoard, BoxLocation, numbers1to9 } from "../../src/types";
import { loopThroughColumn, loopThroughRow, loopThroughBox } from "../../src/functions/iterators"

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

test.only('callback function in loopThroughRow should receive each square in top row.', () => {
  const board = new Board(mockBoardRows1);
  let count = 0;
  loopThroughRow(board, 0, (square: Square) => {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  });
});

test('callback function in loopThroughRow should receive each square in bottom row.', () => {
  const board = new Board(mockBoardRows1);
  let count = 9;
  loopThroughRow(board, 8, (square: Square) => {
    expect(square.currentNumber).toBe(`${count}`);
    count--;
  });
});

test('callback function in loopThroughRow should change each square in top row.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9  = 1;
  loopThroughRow(board, 0, (square: Square) => {
    square.currentNumber = `${countCreate}`;
    countCreate++;
  });
  let countTest = 0;
  loopThroughRow(board, 0, (square: Square) => {
    countTest++;
    expect(square.currentNumber).toBe(`${countTest}`);
  });
});

test('callback function in loopThroughRow should change each square on bottom row.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9 = 9;
  loopThroughRow(board, 8, (square: Square) => {
    square.currentNumber = `${countCreate}`;
    countCreate--;
  });
  let countTest = 9;
  loopThroughRow(board, 8, (square: Square) => {
    expect(square.currentNumber).toBe(`${countTest}`);
    countTest--;
  });
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

test('callback function in loopThroughColumn should receive each square in first column.', () => {
  const board = new Board(mockBoardColumns1);
  let count = 0;
  loopThroughColumn(board, 0, (square: Square) => {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  })
});

test('callback function in loopThroughColumn should receive each square in last column.', () => {
  const board = new Board(mockBoardColumns1);
  let count = 9;
  loopThroughColumn(board, 8, (square: Square) => {
    expect(square.currentNumber).toBe(`${count}`);
    count--;
  })
});

test('callback function in loopThroughColumn should change each square in first column', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9  = 1;
  loopThroughColumn(board, 0, (square: Square) => {
    square.currentNumber = `${countCreate}`;
    countCreate++;
  });
  let countTest = 0;
  loopThroughColumn(board, 0, (square: Square) => {
    countTest++;
    expect(square.currentNumber).toBe(`${countTest}`);
  });
});

test('callback function in loopThroughColumn should change each square on last column.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9 = 9;
  loopThroughColumn(board, 8, (square: Square) => {
    square.currentNumber = `${countCreate}`;
    countCreate--;
  });
  let countTest = 9;
  loopThroughColumn(board, 8, (square: Square) => {
    expect(square.currentNumber).toBe(`${countTest}`);
    countTest--;
  });
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


test('callback function in loopThroughBox should receive each square in northwest box.', () => {
  const board = new Board(mockBoardBox1);
  let count = 0;

  loopThroughBox(board, 'NW', (square: Square) => {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  })
});

test('callback function in loopThroughBox should receive each square in center box.', () => {
  const board = new Board(mockBoardBox1);
  let count = 0;

  loopThroughBox(board, 'C', (square: Square) => {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  })
});

test('callback function in loopThroughBox should receive each square in southeast box.', () => {
  const board = new Board(mockBoardBox1);
  let count = 0;

  loopThroughBox(board, 'SE', (square: Square) => {
    count++;
    expect(square.currentNumber).toBe(`${count}`);
  })
});

test('callback function in loopThroughBox should change each square in northwest box', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9  = 1;
  loopThroughBox(board, 'NW', (square: Square) => {
    square.currentNumber = `${countCreate}`;
    countCreate++;
  });
  let countTest = 0;
  loopThroughBox(board, 'NW', (square: Square) => {
    countTest++;
    expect(square.currentNumber).toBe(`${countTest}`);
  });
});

test('callback function in loopThroughBox should change each square in center box.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9 = 9;
  loopThroughBox(board, 'C', (square: Square) => {
    square.currentNumber = `${countCreate}`;
    countCreate--;
  });
  let countTest = 9;
  loopThroughBox(board, 'C', (square: Square) => {
    expect(square.currentNumber).toBe(`${countTest}`);
    countTest--;
  });
});

test('callback function in loopThroughBox should change each square on southeast box.', () => {
  const board = new Board(blankBoard);
  let countCreate: numbers1to9 = 9;
  loopThroughBox(board, 'SE', (square: Square) => {
    square.currentNumber = `${countCreate}`;
    countCreate--;
  });
  let countTest = 9;
  loopThroughBox(board, 'SE', (square: Square) => {
    expect(square.currentNumber).toBe(`${countTest}`);
    countTest--;
  });
});