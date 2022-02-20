import { importBoard, importNumbers, stateType } from '../types';
import { Square } from "./square";
export class Board {

  private _state: stateType;

  constructor(importBoardData: importBoard) {
    this.createBoard(importBoardData);
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    this._state = newState;
  }

  private createBoard(importBoardData: importBoard) {
    let count = 1;
    let protoState:any = importBoardData.map((row) => row.map((squareData: importNumbers) => {
      let square = new Square(count++);
      if (squareData !== 0) square.currentNumber = `${squareData}`;
      return square;
    }))
    this._state = protoState as stateType;
  }

  viewSimpleOnConsole() {
    this._state.forEach((row) => {
      console.log(row.map((data) => data.currentNumber));
    })
    console.log('************************************');
  }

  viewFullOnConsole() {
    this._state.forEach((row) => {
      console.log(row);
    })
    console.log('************************************');
  }
}
