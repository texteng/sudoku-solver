type numbers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | null;

export class Square {
  id: number;
  possibleNums: numbers[]= ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  currentNum: numbers = null;
  constructor(id: number) {
    this.id = id;
  }
}