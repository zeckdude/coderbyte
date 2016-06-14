// Letter Capitalize
// ----------------------------------------------------------------------------
// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
// Words will be separated by only one space.

function LetterCapitalize(str) {
  //Make the first character uppercase
  str = str.substring(0, 1).toUpperCase() + str.substring(1, str.length);

  // Capture all characters that come after a space and make them uppercase
  str = str.replace(/ (\w)/g, function(match, capture){
    return " " + capture.toUpperCase();
  });

  // Return the formatted string
  return str;
}

console.log( LetterCapitalize("hello world") );
console.log( LetterCapitalize("i ran there") );



// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "hello world"    Output = "Hello World"
// Input = "i ran there"    Output = "I Ran There"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
