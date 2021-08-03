function matrixGen(width, height) {
    let matrix = [];

    for (let i = 1; i < width + 1; i++) {
       // matrix.push([])
        matrix[i-1] = []
        for (let j = 1; j < height + 1; j++) {
          //  matrix[matrix.lenght - 1].push(i * j)
          matrix[i-1][j-1] = i*j;
        }
    }
    return matrix;
}
console.log(matrixGen(1, 5))
console.log(matrixGen(5, 4))
console.log(matrixGen(3, 6))
console.log(matrixGen(0, 0))

