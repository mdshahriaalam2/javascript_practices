// return one function to another

function returnIsEven() {
    const isEven = (n) => n % 2 === 0;
    return isEven;
}

const isEven = returnIsEven();

console.log(isEven(4)); // call isEven function
console.log(returnIsEven()(4)); // call returnIsEven function