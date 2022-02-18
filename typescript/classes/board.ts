import { Square } from "./square";
export class Board {

  constructor() {
    this.createBoard();
  }

  createBoard() {
    for (let count = 1; count <= 81; count++) {
      console.log(count);
    }
  }
}