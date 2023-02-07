const chess = dim => {
    if (isNaN(dim)) return null;
    if (dim < 2) return null;
    let row_1 = '* '.repeat(Math.floor(dim/2));
    let row_2 = ' *'.repeat(Math.floor(dim/2));
    if (dim%2 !== 0){
        row_1 = row_1 + row_1[0];
        row_2 = row_2 + row_2[0];
    }
    row_1 += '\n';
    row_2 += '\n';
    let table = (row_1 + row_2).repeat(Math.floor(dim/2));
    if (dim%2 !== 0) {
        table += row_1;
    }
    return table;
}