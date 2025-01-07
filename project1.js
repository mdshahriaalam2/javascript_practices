// fill array

const response = new Array(10);
response.fill(false);

for (let i = 0; i < response.length; i++){
    const rand = Math.floor(Math.random()*10+1);
    response[i] = rand > 5 ? 'X' : 'O';
}

const names=['Shifat', 'Abdul', 'Nesar']
// update array using function

function update(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] = `${i + 1}. ${arr[i]}`;
    }

}
update(names)
console.log(names)