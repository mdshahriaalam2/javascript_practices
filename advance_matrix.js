// Matrix

const matrixA = [
    [0,5],
    [2,6],
    [5,9]
];

const matrixB = [
    [0,7],
    [9,4],
    [8,3]
];

const matrixsum = (matrixA, matrixB) => {
    const result = []
    for (let i = 0; i < matrixA.length; i++){
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++){
            row.push(matrixA[i][j] + matrixB[i][j]); //Sum of two matrix.
        }
        result.push(row);
    }
    return result;
}
const matrixc = matrixsum(matrixA, matrixB);
console.log(matrixc)