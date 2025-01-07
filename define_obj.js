/*
const o = {
    
}// struc of object

console.log(typeof (o)); // this is an object
*/

// Data of Persion 1
const person1 = {};
person1.fname = "Md";
person1.lname = "Shifat";
person1.mail = "shifat@gmail.com";
person1.number = "123456789";


// console.log(person1); // Print whole data
// console.log(person1.fname); // Print specific data

// Data for person 2
const person2 = {
    fname: "Md",
    lname: "Nesar",
    mail: "nesar@gmail.com",
    class:12
}
// Enter another data
person2.clg_id = 1205;
person2.age = 22;

console.log(person2)
// Remove specific data
delete person2.class;

// print data using variable
const key = 'age';
console.log(person2[key]);// here key=age