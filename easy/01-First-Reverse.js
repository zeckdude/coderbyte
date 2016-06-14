// First Reverse
// ----------------------------------------------------------------------------
// have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

function FirstReverse(str) {
  // Empty string to contain the reversed string that is built
  var reverseStr = "";

  // Loop through each letter in the string in reverse order
  for(var i = str.length; i >= 0; i--) {
    // Add the current letter to the reversed string
    reverseStr += str.charAt(i);
  }

  // Return the built reversed string
  return reverseStr;
}

console.log( FirstReverse( "coderbyte" ) );
console.log( FirstReverse( "I Love Code"  ) );



// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "coderbyte"    Output = "etybredoc"
// Input = "I Love Code"  Output = "edoC evoL I"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
