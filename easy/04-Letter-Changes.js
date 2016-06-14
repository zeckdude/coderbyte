// Letter Changes
// ----------------------------------------------------------------------------
// Hhave the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {
  // Identify any letters in the string
  str = str.replace(/[a-zA-Z]/g, function(match) {
    // If the matched letter is a "z" or "Z", change it to an "a" or "A"
    if(match === "z") {
      return "a";
    } else if(match === "Z") {
      return "A";
    } else {
      // Replace matched letter with the next one in the alphabet
      return String.fromCharCode(match.charCodeAt() + 1);
    }
  });

  // Make any vowels uppercase
  str = str.replace(/[aeiou]/g, function(match) {
    return match.toUpperCase();
  });

  // Return the formatted string
  return str;
}

console.log( LetterChanges( "hello*3"  ) );
console.log( LetterChanges( "fun times!" ) );





// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "hello*3"    Output = "Ifmmp*3"
// Input = "fun times!"    Output = "gvO Ujnft!"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
