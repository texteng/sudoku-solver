import { Board } from './classes/board';
import { easyBoard1 } from '../mockBoards'
console.log('Sudoku Solver');
const board = new Board(easyBoard1);
board.display();
