console.log(10 > 5)
console.log(10 == 5)
console.log(10 != 5)

const a = 1;
const b = "1";

console.log(a == b); // Two equals signs compares value only
console.log(a === b); // This compares both value and type at the same time

const age = 19;

if(age > 19){
    console.log('Welcome!');
} else if(age === 19) {
    console.log('Good luck on your SAT!')
} else {
    console.log('Bye!');
}

// Two if paragraphs can be shortened by else keyword, if possible
// 'else if' also can be used

// Logical operators | & !
// These operators are used when treating Boolean values
const age = prompt('Your age?');
const isAge = age > 19;

if(!isAge){
    console.log('Access denied.');
}
// Boolean operators have prioprity relations
// ! $ |