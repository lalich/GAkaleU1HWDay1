// First Day item
console.log("Hello World")

// this is a single line comment
/*
this is 
a multi-line
comment
*/

// Describe the basic data types of JS - strings & numbers
console.log('Hello World')
console.log("Matt's awesome.")
console.log(100)
console.log(100 + 100)

// Assign Values to variables
// var phrase = "In my room is a chair and a table"
// console.log(phrase)


const phrase = 'In my room is a chair and a table';
const sum = 99 + 1;

console.log(phrase)
console.log(sum)
// variable names may not begin with a number or include special characters 
/* ***examples thisVariable not this_Variable & thisVariable and ThisVariable are different!!!***
Interpreters require ; (DO NOT FORGET THE ;)
Constants can not be reassigned variables later...
*/

// const item = 'chair';
// item = 'eclair';

// console.log(item);

let item = 'chair';
item = 'eclair';

console.log(item);

// a will print bongos, b will print get your, and c will print nothing but also not an error

// //Concatenate values
// console.log("Hello" + ' World');

// const adjective = 'beautiful';
// console.log('What a ' + adjective + ' day!!');

const adjective = 'crumym';
console.log('What a ' + adjective + ' day!!');

// ACTIVITY //

console.log('Please' + ' squeeze' + ' the' + ' cheese');

let a = 5;
let b = 10;
let c =  a + b;

console.log("The sum of " + a + ' and ' + b + ' is ' + c + '.');

// Write a while loop//

// let num = 1;
// while (num <= 1000) {
//     console.log('the number is: ' + num)
//     num++;
// }

console.log( -10 >= -100)
console.log(0 < 1000)
console.log( 888 === 889)
console.log( 20 <= 20)

// let num = 1;
// while (num <= 1000) {
//     console.log(num);
//     num++;
// }

// let num = 1;
// while (num <= 100){
// //     console.log(num);
// //     num++;
// }

// let num = 1;
// while (num <= 5000){
//     console.log(num*num);
//     num++;
// }

// let num = 1000;
// while (num >= 1){
//     console.log(num);
//     num--;
// }

// for (let i = 999; i <=9999; i++) {
// console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
// console.log("This is the song that never ends' to the console " + i + " times")
// }

for (let i = 1000; i >=1; i--) {
    console.log(i)
}