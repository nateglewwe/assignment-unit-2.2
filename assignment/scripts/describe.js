// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable 'name' and assign it the string 'Dane'
// We use our if command to check if our string 'Dane' has the same type and value as 'Mary' which it doesn't
// Therefore the console.log command will follow the 'else' path, giving a result of 'How do you do?' since 'Dane' doesn't match 'Mary'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create two variables 'secret' and 'code', secret has no assigned value while code is assigned value '123'
// The first 'if' statement checks if 'code' has the value of 123, which it does
// Therefore 'secret' is assigned the string 'super' and 'code' has its value doubled to 246
// The second 'if' statement subsequently checks if 'code' has a value greater than 250, which is currently does not
// Therefore 'secret' does get assigned the string 'duper' because the if statement wasn't met
// So the final result is that running console.log(secret) gives a result of 'super' because only the first if statement was met
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create variables 'isStudent' 'age' and 'zip' which respectively have the strings/values of 'true' '34' and '55407'
// Our first if statement checks if BOTH isStudent equals true AND zip is greater than 80000, since zip is not greater than 80000 than this first if statement is not met and nothing is outputted to the console
// The else path moves us to our second if statement, which checks if isStudent equals false OR age is less than 30, since neither of those is true than this second if statement is not met and nothing is outputted to the console
// The else path moves us to our third if statement, which checks if isStudent equals true, since it does than the console.log successfully outputs 'Welcome to Prime!'
// And the code stops there because the last else path isn't taken since the previous if statement was successfully met

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX colorOne should be equal to 'blue' and colorTwo should be equal to 'red' and also in the if statement colorTwo should also equal purple
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX time = 4 should be a variable, not a constant, so 'let time = 4'
const time = 4;

// FIX we need both conditions to be met, so we need to use '&&' not '||'
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX minAge = 21 should be a variable, not a constant, so 'let minAge = 21'
const minAge = 21;

if(minAge <= age) {
// FIX we need to switch the positions of 'no entry' and 'enter' in the code, so that console.log('enter') runs when we successfully check than age is greater or equal to minAge
  console.log('no entry');
} else {
  console.log('enter');
}
*/

