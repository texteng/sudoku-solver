/*
Box Location
Boxes will be identified as cardinal directions with center being the middle 
NW  N  NE
W   C  E
SW  S  SE
*/
export type BoxLocation =
  'NW' | 'N' | 'NE' |
  'W' | 'C' | 'E' |
  'SW' | 'S' | 'SE';

// Allows user to use interators that go from 0-8 to go through all box locations
export const translateNumberToBoxLocation = function (index: number | BoxLocation): BoxLocation {
  if (typeof index === 'string') {
    return index;
  } 
  const boxLocationArray: BoxLocation[] = ['NW', 'N', 'NE', 'W', 'C', 'E', 'SW', 'S', 'SE'];
  return boxLocationArray[index];
}

export const boxLocationData = {
  'NW': { 'firstRowIndex': 0, 'firstColumnIndex': 0 }, 'N': { 'firstRowIndex': 0, 'firstColumnIndex': 3 }, 'NE': { 'firstRowIndex': 0, 'firstColumnIndex': 6 },
  'W': { 'firstRowIndex': 3, 'firstColumnIndex': 0 }, 'C': { 'firstRowIndex': 3, 'firstColumnIndex': 3 }, 'E': { 'firstRowIndex': 3, 'firstColumnIndex': 6 },
  'SW': { 'firstRowIndex': 6, 'firstColumnIndex': 0 }, 'S': { 'firstRowIndex': 6, 'firstColumnIndex': 3 }, 'SE': { 'firstRowIndex': 6, 'firstColumnIndex': 6 }
}

export function setBoxBySquareCoordinates(rowIndex: number, columnIndex: number): BoxLocation {
  // Sets North, Center or South
  let verticalLocation = ''
  if (rowIndex < 3) {
    verticalLocation = 'N'
  } else if (rowIndex >= 6) {
    verticalLocation = 'S'
  }
  let horizontalLocation = '';
  if (columnIndex < 3) {
    horizontalLocation = 'W'
  } else if (columnIndex >= 6) {
    horizontalLocation = 'E'
  }
  return ((verticalLocation + horizontalLocation) || 'C') as BoxLocation;
}