import { Square } from '../src/classes/Square';
let square: Square;

beforeEach(() => {
  square = new Square(1);
});

test('Square Created', () => {
  expect(square).toBeTruthy();
});

test('Square has all possibleNumbers', () => {
  expect(square.possibleNumbers).toHaveLength(9);
});

test('Square should have all possibleNumbers', () => {
  expect(square.possibleNumbers).toHaveLength(9);
});

test('Square should not be full', () => {
  expect(square.isFull).toBe(false);
});

test('Square can set correct number', () => {
  square.currentNumber = '2';
  expect(square.isFull).toBe(true);
  expect(square.possibleNumbers).toHaveLength(0);
});

test('Square removePossibleNumber can remove "2"', () => {
  square.removePossibleNumber('2');
  expect(square.possibleNumbers).toHaveLength(8);
  expect(square.possibleNumbers.includes('2')).toBe(false);
  expect(square.isFull).toBe(false);
});

test('Square removePossibleNumber will not remove a number a second time', () => {
  square.removePossibleNumber('2');
  square.removePossibleNumber('2');
  expect(square.possibleNumbers).toHaveLength(8);
  expect(square.possibleNumbers.includes('2')).toBe(false);
  expect(square.isFull).toBe(false);
});