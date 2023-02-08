const fizzbuzz = (num) => {
    let arr = [];
    for (let count = 1; count <= num; count++) {
        if (count % 15 === 0) {
            arr = [...arr, 'fizzbuzz'];
        } else if (count % 5 === 0) {
            arr = [...arr, 'buzz'];
        } else if (count % 3 === 0) {
            arr = [...arr, 'fizz'];
        } else {
            arr = [...arr, count];
        }
    }
    return arr;
};

module.exports = fizzbuzz;