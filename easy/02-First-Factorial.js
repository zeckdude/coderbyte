// First factorial
// ----------------------------------------------------------------------------
// have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

function FirstFactorial(num) {
  // Add all the values (from the num to 1) into an array
  for(var i = num, factorialNums = []; i > 0; i--) {
    factorialNums.push(i);
  }

  // Loop through the array of numbers and multiply them together
  for(var j = 0, factorialOutput = 1; j < factorialNums.length; j++) {
    factorialOutput *= factorialNums[j];
  }

  // Return the factorial number
  return factorialOutput;
}

console.log( FirstFactorial( 4 ) );
console.log( FirstFactorial( 8 ) );




// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 4    Output = 24
// Input = 8    Output = 40320





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
