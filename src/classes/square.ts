import { BoxLocation, setBoxBySquareCoordinates } from '../functions/box';
import { indexes, numberType } from '../types';

export class Square {
  private _row: indexes;
  private _column: indexes;
  private _box: BoxLocation;
  private _possibleNumbers: numberType[]= ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  private _currentNumber: numberType | null = null;
  possibleNumbersRemovedFromRelatedSquares = false;
  validated = false;

  constructor(row: indexes, column: indexes) {
    this._row = row;
    this._column = column;
    this._box = setBoxBySquareCoordinates(row, column);
  }

  get location() {
    return {
      row: this._row,
      column: this._column,
      box: this._box
    }
  }

  get possibleNumbers() {
    return this._possibleNumbers;
  }

  get currentNumber() {
    return this._currentNumber;
  }

  set currentNumber(value: numberType) {
    this._possibleNumbers = [];
    this._currentNumber = `${value}` as numberType;;
  }

  get isFull(): boolean {
    return this._currentNumber != null;
  }

  // returns true if number changed 
  removePossibleNumber(targetNumber: numberType): boolean {
    if (this.isFull) return;
    if (!this._currentNumber) {
      this._possibleNumbers = this._possibleNumbers.filter((number) => number !== targetNumber);
    }
    if (this._possibleNumbers.length === 1) {
      this.currentNumber = this._possibleNumbers[0];
      return true;
    }
    return false;
  }

  // test functions- Only to be used in tests
  set testPossibleNumbers(possibleNumbers: numberType[]) {
    this._possibleNumbers = possibleNumbers;
  }
}
