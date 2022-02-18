define("classes/square", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Square = void 0;
    class Square {
        constructor(id) {
            this.possibleNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            this.currentNum = null;
            this.id = id;
        }
    }
    exports.Square = Square;
});
define("classes/board", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Board = void 0;
    class Board {
        constructor() {
            this.createBoard();
        }
        createBoard() {
            for (let count = 1; count <= 81; count++) {
                console.log(count);
            }
        }
    }
    exports.Board = Board;
});
define("index", ["require", "exports", "classes/board"], function (require, exports, board_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('Sudoku Solver');
    const board = new board_1.Board();
    board.createBoard();
});
//# sourceMappingURL=main.js.map