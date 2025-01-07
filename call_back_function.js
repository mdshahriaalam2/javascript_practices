 // Call Back function

const arr = [1, 2, 3, 4, 5];

let sum = 0;
arr.forEach((v) => { // Print each element of an array using foreach method.
    // console.log(v); // can access each specific value directly
    sum += v; // sum = sum + v;
})

// console.log(sum);


// To Upper

function toUpper(str, cb) {
    const Upper = str.toUpperCase();
    cb(Upper);
};

toUpper("md shifat", (str) => {
    console.log('Hello', str.length);
});