`use strict`

const myCounter = ( function() {
  
  let count = 1;

  return function() {
    return `
    --- Task ${count++} -------`;
  }
} () )

console.log( myCounter( ) )

/* 1. Write a JavaScript function to truncate a string to a certain number of words. */

// write your code here 
function truncate( originalString, numberOfWords ) {

  return originalString //I wanna a function returning the original string after:
  .split(" ") //fragmenting it into smaller pieces (a new array where each word is turned into a string)
  .splice(0, numberOfWords) //so I can splice the new array with the number of words it should be returned
  .join(" ")//to finally put together the strings on my new array turning it back into a single string
}

console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"

//-------------------------------------------------------------------
console.log( myCounter( ) )

/* 2. Write a JavaScript function to alphabetize a given string. */
  
// write your code here 
function alphabetize_string( string ) {

  return string
  .split("")//again I split my string into smaller pieces
  .sort()//sort() rearranges each new string in the new array alphabetically
  .join("")//I concatenate all the alphabetically organized strings in a single string again
  .trim()//Without trim(), the space between two words will be considered part of the new string. To get rid of them, trim does the job!
}
  
console.log(alphabetize_string("United States"));
//"SUadeeinsttt"

//-------------------------------------------------------------------
console.log( myCounter( ) )

/* 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
*/
  
// I create a arrow function that takes a string as parameter...
const ascii_to_hexa = ( string ) => {

  //I declare a new variable that accepts a empty array
  let arr = [];

  //I loop through the parameter of my function...
  for( let i = 0; i < string.length; i++ ) {

    //declare a new variable to store which will be add to the empty array
    //the new variable will return a integer NUMBER between 0 and 65535 for each element of the string, represented here for "i", returned by toString(16) a string with a hexadecimal based on 16.
    let hexNumber = Number( string.charCodeAt(i) ).toString(16);
    arr.push( hexNumber ); 
  }

  return arr.join("")
}
  
console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030

//-------------------------------------------------------------------
console.log( myCounter( ) )

/* 4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
*/

function remain( a ) {
  console.log(a % 10 )
  console.log(a % 100)
}

remain( 1 )
remain( 2 )
remain( 11 )


const humanize = ( number ) => {

  if( (number % 10) === 1 && (number % 100) !== 11 ) {

    return number + "st"

  } if( (number % 10) === 2 && (number % 100) !== 12 ) {

    return number + "nd"

  } if( (number % 10) === 3 && (number % 100) !== 13 ) {

    return number + "rd"

  } else {

    return number + "th"
  }

}

console.log(humanize(1)); //"1st"
console.log(humanize(11)); //"11th"
console.log(humanize(12)); //"11th"
console.log(humanize(20)); //"20th"
console.log(humanize(21)); //"21st"
console.log(humanize(22)); //"22nd"
console.log(humanize(123)); //"123rd"
console.log(humanize(302)); //"302nd"

//-------------------------------------------------------------------
console.log( myCounter( ) )

/* 5. Write a JavaScript function to get the successor of a string. */

//-------------------------------------------------------------------
console.log( myCounter( ) )

/* 6. Write a JavaScript function to sort the following array of objects by title value. */

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

//I create a function that takes two param in order to compare values
function sortByTitle( elementA, elementB ) {

  //My condition is: if the value A is higher than B (alphabetical order)...
  if( elementA.title > elementB.title ) {
    //...from A to Z, return title starting with A
    return 1;//ask if this number is the index??

  } else if( elementA.title < elementB.title ){

    return -1;

  } else {

    return 0

  }

}

console.log( library.sort( sortByTitle ))

//-------------------------------------------------------------------
console.log( myCounter( ) )

/* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds */


//-------------------------------------------------------------------
console.log( myCounter( ) )

/* 8. Write a JavaScript program to create a Clock.
  `Note`: The output will come every second. */

//-------------------------------------------------------------------
console.log( myCounter( ) )

/* 9. Write a JavaScript function to print all the methods in an JavaScript object.
*/

//function that takes one param
function all_methods( obj ) {
  //to get a list of all methods only of an object, I use the method getOwnPropertiesNames of it, then I filter only the result that matches the typeof function
  return Object.getOwnPropertyNames( obj ).filter( (item) => {
    return typeof obj[item] === "function"
  })
}

console.log( all_methods( Array ) );
console.log( all_methods( String ) );
console.log( all_methods( Math ) );

//-------------------------------------------------------------------
console.log( myCounter( ) )

/* 10. Write a JavaScript function to print all the properties in an JavaScript object. */

// a variable with arrow function...
const all_properties = ( obj ) => {

  //according to MDN, this method Object.getOwnPropertyNames() returns an array with all properties in a given object
  return Object.getOwnPropertyNames(obj)

}

console.log( all_properties( Array ) );
console.log( all_properties( String ) );
console.log( all_properties( Math ) );