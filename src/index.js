// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (!matrix) return [];

    for (let i = 0; i < matrix.length; i++) {
        if (i > 0 && i % 2) {
            for (j = matrix[i].length - 1; j > -1; j--) {
                arr.push(matrix[i][j]);
            }
        } else {
            for (j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
        }
    }
    return arr;


};