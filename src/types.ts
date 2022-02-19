export type numbers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | null;
export type rawNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type importRow = [rawNumbers, rawNumbers, rawNumbers, rawNumbers, rawNumbers, rawNumbers, rawNumbers, rawNumbers, rawNumbers];
export type importBoard = [importRow, importRow, importRow, importRow, importRow, importRow, importRow, importRow, importRow];

export type stateRow = [numbers, numbers, numbers, numbers, numbers, numbers, numbers, numbers, numbers];
export type stateType = [stateRow, stateRow, stateRow, stateRow, stateRow, stateRow, stateRow, stateRow, stateRow];
