/*

title: "Array Traverse "

*/

const arr = [1, 2, 3, 4, 5, 6, 4, 5,100,11,110];
// index no start from 0 ot var.len-1
/*
sum = 0
for (let i = 0; i < arr.length; i++){
    sum += arr[i]
}
console.log("The summation of this array is : " + sum);

*/

//find larger number

let larg_number = arr[0];
for (let i = 0; i < arr.length; i++){
    if (arr[i]>larg_number) {
        larg_number = arr[i];
    }
}
console.log(larg_number);

