import { Board } from "./classes/board";
import { Square } from "./classes/square";

export type numbers1to9 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type numbers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | null;
export type importNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type importRow = [importNumbers, importNumbers, importNumbers, importNumbers, importNumbers, importNumbers, importNumbers, importNumbers, importNumbers];
export type importBoard = [importRow, importRow, importRow, importRow, importRow, importRow, importRow, importRow, importRow];

export type stateRow = [Square, Square, Square, Square, Square, Square, Square, Square, Square];
export type stateType = [stateRow, stateRow, stateRow, stateRow, stateRow, stateRow, stateRow, stateRow, stateRow];

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

export interface iterationCallback {
  (square: Square): void;
}
  
export interface navigationIterator<t> {
  (board: Board, locationId: t, callback: iterationCallback): void;
}