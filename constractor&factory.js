// Constructor pattern

// const a1 = new Array(); // Get an empty array and its length is zero

const a1 = new Array(5);// it is also an empty array but has 5 elements
// fill a pre-define array


const a3 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);// get an array and set values

console.log(a3,  a3.length);

// Factory pattern
const b1 = Array(); // Get an empty array and its length is zero

const b2 = Array(5);// it is also an empty array but has 5 elements

const b3 = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);// get an array and set values

console.log(a1.__proto__.constructor);
console.log(b1.__proto__.constructor);


