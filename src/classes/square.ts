export type numbers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | null;

export class Square {
  private id: number;
  private possibleNums: numbers[]= ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  currentNum: numbers | null = null;
  clearedRow: false;
  clearedColumn: false;
  clearedBox: false;
  constructor(id: number) {
    this.id = id;
  }

  setCurrentNumber(value: numbers) {
    this.possibleNums = [];
    this.currentNum = `${value}` as numbers;;
  }

  get isFilled(): boolean {
    return this.currentNum != null;
  }

  clearPossibleNumbers(targetNumber: numbers) {
    if (!this.currentNum) {
      this.possibleNums = this.possibleNums.filter((number) => number !== targetNumber);
    }
    if (this.possibleNums.length === 1) {
      this.setCurrentNumber(this.possibleNums[0]);
    } 
  }
}