// Function Expression

/*
const sum = function (a, b) {
    return a + b;
}; 
console.log(sum(10, 20));
*/

// Arrow Function

const sum = (a, b) => {// this is a function
    return a + b;
};

// One line function
const sum1 = (a, b) => a + b; // one line 
console.log(sum1(25, 50));

const max = (a, b) => Math.max(a, b);
console.log(max(52, 30, 100)); // if you provide more values it will take only first