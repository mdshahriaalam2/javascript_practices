// this is function

const arr1 = [4, 6, 10, 3, 29, 3, 23, 12];
const arr2 = [6, 11, 21, 32, 3, 8, 20, 5];

// function findmax():

function findmax(arr) {
    let max = arr[0];
    for (let v of arr) {
        if (v > max) {
            max = v;
        }
    }
    return max;
}

console.log(findmax(arr2));



