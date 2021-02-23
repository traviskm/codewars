/*
  https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript

  Need to test an array of 9 arrays with 9 numbers in them to determine if the sudoku
  puzzle is finished.

  The easy part is determining if the rows are finished, the difficult part will be the
  columns and 3x3 boxes.
*/

// This function takes the created board and uses Sets to determine if every value
// in a given row is unique and the length of the Set is the same as the given row,
// then if the entire board evaluates to true.
const checkTruthy = board => {
  let truthy = new Set(board.map(row => {
    return new Set(row).size === row.length;
  }));

  return truthy.size === 1 && truthy.has(true);
}

// Creating the column board
const columns = board => {
  let columnNums = [0, 1, 2, 3, 4, 5, 6, 7, 8],
      columnArray = [];

  columnNums.forEach(num => {
    columnArray.push(board.reduce((cols, row) => [...cols, row[num]], []));
  });

  return columnArray;
}

// Retrieving the coordinates for a given square num.
const squareCoords = num => {
  let coords;
  switch (num) {
    case 1:
      coords = [0, 1, 2];
      break;
    case 2:
      coords = [3, 4, 5];
      break;
    case 3:
      coords = [6, 7, 8];
      break;
    default:
      coords = [];
  }

  return coords;
}

// Getting the values for a given square
const singleSquare = (x, y, board) => {
  let square = [],
      rows = squareCoords(x),
      columns = squareCoords(y);

  rows.forEach(row => {
    columns.forEach(column => {
      square.push(board[row][column]);
    });
  });

  return square;
}

// Using the above two functions in conjunction to build the "squares" board.
const squares = board => {
  let diffSquares = [1, 2, 3],
      squareArray = [];

  diffSquares.forEach(x => {
    diffSquares.forEach(y => {
      squareArray.push(singleSquare(x, y, board));
    });
  });

  return squareArray;
}

// Check if each board evaluates to true.
const doneOrNot = board => {
  let rowsComplete = checkTruthy(board);
  let columnsComplete = checkTruthy(columns(board));
  let squaresComplete = checkTruthy(squares(board));

  return rowsComplete && columnsComplete && squaresComplete ? "Finished!" : "Try again!";
}
