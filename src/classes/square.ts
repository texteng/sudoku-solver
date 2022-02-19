import { numbers } from '../types';

export class Square {
  private id: number;
  private _possibleNumbers: numbers[]= ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  private _currentNumber: numbers | null = null;
  constructor(id: number) {
    this.id = id;
  }

  get possibleNumbers() {
    return this._possibleNumbers;
  }

  get currentNumber() {
    return this._currentNumber;
  }

  set currentNumber(value: numbers) {
    this._possibleNumbers = [];
    this._currentNumber = `${value}` as numbers;;
  }

  get isFull(): boolean {
    return this._currentNumber != null;
  }

  removePossibleNumber(targetNumber: numbers) {
    if (!this._currentNumber) {
      this._possibleNumbers = this._possibleNumbers.filter((number) => number !== targetNumber);
    }
    if (this._possibleNumbers.length === 1) {
      this.currentNumber = this._possibleNumbers[0];
    } 
  }
}