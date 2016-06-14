// Simple Adding
// ----------------------------------------------------------------------------
// Have the function SimpleAdding(num) add up all the numbers from 1 to num.
// For the test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
  // Loop through each number (from 1 to the specified num) and add them together
  for(var i = 1, total = 0; i <= num; i++) {
    total += i;
  }

  // Return the calculated number
  return total;
}

console.log( SimpleAdding( 12 ) );
console.log( SimpleAdding( 140 ) );




// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 12   Output = 78
// Input = 140     Output = 9870





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
