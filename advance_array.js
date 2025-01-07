//Multi-Dimensional array

//Handle 2D array
const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


// Print all data at once using for loop 
for (let j = 0; j < numbers.length; j++){
    for (let i = 0; i < numbers[j].length; i++){
        console.log(numbers[j][i])
    }
}