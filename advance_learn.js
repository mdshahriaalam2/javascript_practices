// Array of anything
const arr = [10, 'ten', true, getten, { ten: 10 }, [10, 11]];

function getten() {
    return 10;
}
// console.log(arr);

//Array of function
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

// Loop and call all functions from array
const func = [sum, sub, times, div, mod];
const a = 10, b = 20;
// for (let i = 0; i < func.length; i++){
//     const result = func[i](a,b);
//     console.log(`${func[i].name} Result = ${result}`);
// }


// Array of arrays\
const PointTable = [
    [0, 0],
    [3, 5],
    [5, 7],
    [10, 23]
];

//One dimentional Traverse
for (let i = 0; i < PointTable.length; i++){
    console.log(`Point ${i} => x = ${PointTable[i][0]} and y = ${PointTable[i][1]}`);
}
