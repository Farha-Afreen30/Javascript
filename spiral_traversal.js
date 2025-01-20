function spiralTraverse(matrix) {
    let result = [];
    if (matrix.length === 0) {
        return result
    };

    let top = 0;                 
    let bottom = matrix.length - 1;  
    let left = 0;  
    let right = matrix[0].length - 1;  

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;  

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; 
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}


const array = [
    [1, 2, 3, 4, 5, 6],
    [8, 9, 10, 11, 12, 13],
    [6, 5, 4, 3, 2, 1],
    [5, 6, 4, 2, 1, 3],
];

console.log(spiralTraverse(array));
