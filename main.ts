export { }

let message = 'Welcome Back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const name = 'Jerwin Ivan S. Fernandez';

// we have a variable name isBeginner have a type of boolean and a value of true
let isBeginner: boolean = true;

// number
let total: number = 0;

// string
let firstName: string = 'Jerwin';

// multiple line with embedded expressions using template strings
let sentence: string = `My name is ${firstName}
I am a bignner in TypeScript`;

console.log(sentence);

// more types 
let n: null = null;
let u: undefined = undefined;

// these types are classified as subtypes of all other types - u can assign any types in these types
let isNew: boolean = null;
let myName: string = undefined;

// declaring array type 2 way
// list1 of type number
let list1: number[] = [1, 2, 3];

// list2 is an array of type number
let list2: Array<number> = [1, 2, 3];