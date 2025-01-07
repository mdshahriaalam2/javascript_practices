function displaytable(n) {
    // inner function
    const isOdd = n => n % 2 !== 0;

    for (let i = 0; i < n; i++){
        if (isOdd(i)) { // call inner function
            console.log('Table Row [#000]', i + 1);
        } else {
            console.log('Table Row [#fff]', i + 1);
        }
    }
}

displaytable(5)