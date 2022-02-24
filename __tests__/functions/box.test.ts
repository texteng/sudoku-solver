import { setBoxBySquareCoordinates } from "../../src/functions/box";

test('testBoxBySquareCoordinates returns correct box location', () => {
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      expect(setBoxBySquareCoordinates(rowIndex, columnIndex)).toBe(BoxTestArray[rowIndex][columnIndex]);
    }
  }
  
});

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