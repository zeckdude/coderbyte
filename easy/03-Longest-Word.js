// Longest Word
// ----------------------------------------------------------------------------
// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.


function LongestWord(sen) {
  // Remove any special characters in the sentence and split the words by the spaces
  // Loop through each word in the array and check if it is longer than the longest word. If so, replace the longest word with that word.
  var longestWord = "";
  sen.replace(/[&!\.\/:;#%^@()*\+=]+/g, "").split(" ").forEach(function(word){
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  // Return the longest word
  return longestWord;
}

console.log( LongestWord( "fun&!! time"  ) );
console.log( LongestWord( "I love dogs" ) );


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "fun&!! time"    Output = "time"
// Input = "I love dogs"    Output = "love"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
