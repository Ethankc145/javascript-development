// Declare a string using double quotes.
let pet = "Dog";
let petAction = "Dog like to eat a treat.";

// Declare a string using single quotes.
let city = 'Kansas City';
let state = 'Missouri';

/* Using bracket notation on a variable of strings
will output 1 character, or undefined */
//console.log(pet[-9]); // Bracket notation does not work with negative index numbers.
//console.log(petAction[8]);
//console.log(petAction[30]);

// A Long Sentence using the + operator
const longsentence = 
   "Quis veniam sit commodo Lorem anim do nostrud ipsum sunt amet ad." + 
   "Sunt et officia laboris veniam elit minim quis magna fugiat do dolore non." + 
   "Sint consectetur excepteur dolore quis voluptate consequat et Lorem laboris.";
//console.log(longsentence);

const longsentence2 =
   "Laboris ex occaecat enim id nulla do tempor nostrud. \
   Duis pariatur ea reprehenderit nisi culpa fugiat sint labore eu sint. \
   Ad sint veniam occaecat incididunt adipisicing incididunt officia duis mollit esse ullamco eiusmod.";
//console.log(longsentence2);

const variable1="hello, ";
const variable2="world";

//const combine1 = variable1 + variable2;
// console.log(combine1);

const combine2 = variable2 + 20;
//console.log(combine2);

const combine3 = variable1 + variable2 + '!';
//console.log(combine3);

const number1=10
const number2=20

// This is string interpolation with plus operator.
//console.log('Number ' + number1 + 'plus' + 'Number' + number2 + '=' + (number1 + number2));

//This is string interpolation with backtick operator.
//console.log(`Number ${number1} plus number ${number2} = ${number1 + number2}`);

//Esacpe sequences
//const sentence = 'My dog\'s is Coco';
//const sentence = "My dog's is \nCoco";
const sentence = "My dog's is \tCoco";
//console.log(sentence);
//console.log(sentence.charAt(-1));
//console.log(sentence.at(-5));

const sampleString= 'something1';
const sampleString2 = "something2";
//console.log(sampleString.concat('This is ', 'aaaaaa', 'bbbbbbbbbbb'));

//console.log('This is String.'.concat(' Example!')); // Invoking an instance method from a string literal

//console.log(sampleString2.includes(2));

//const sliceSample = sampleString.slice(2, -5);
//console.log(sliceSample);

const splitSampleString = "asdfasdfasdfasfdsasdfasdfasdf"
console.log(splitSampleString.split('f'));
