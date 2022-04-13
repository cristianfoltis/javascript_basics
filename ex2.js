/*2. Create a program to determine whether a squared matrix is magic or not. 
Example: https://en.wikipedia.org/wiki/Magic_square#/media/File:Magicsquareexample.svg . 
A squared matrix is magic if the sums of the numbers in each row, each column, and both main diagonals are the same.
*/

let matrix = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

function isMagicSquare(matrix) {
  let n = matrix.length; // [] 3 x 3 => n = 3
  let sumDiagP = 0,
    sumDiagS = 0;
  for (let i = 0; i < n; i++) {
    sumDiagP = sumDiagP + matrix[i][i]; // sum Primary Diagonal
    sumDiagS = sumDiagS + matrix[i][n - 1 - i]; // sum Secondary Diagonal
  }

  if (sumDiagP != sumDiagS) return false;

  for (let i = 0; i < n; i++) {
    let sumCol = 0;
    let sumRow = 0;
    for (let j = 0; j < n; j++) {
      sumRow += matrix[i][j]; // sum Row
      sumCol += matrix[j][i]; // sum Column
    }
    if (sumRow != sumCol || sumCol != sumDiagP) return false;
  }
  return true;
}

if (isMagicSquare(matrix)) {
  console.log("Magic Square");
} else console.log("Not a magic Square");
