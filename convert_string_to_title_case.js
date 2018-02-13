// PSEUDO CODE
// Start by taking everything in the string to lower case.
// capitalize the first letter of each word

// now look for a list of minor words, there may not be one.
// if minor words, 
  // downcase minor words 
  // then split minor words into an array
  // iterate over minor words, 
  // if found in title, downcase the first letter

// finally make sure the first letter of the first word is capitalized.


// CODE
// Refactor
function titleCase(title, minorWords) {
  var book = title.toLowerCase().replace(/\w\S*/g, function(word) { return word.charAt(0).toUpperCase() + word.substr(1)});
  var lilWords = [];
  if ( minorWords !== undefined ) {
    lilWords = minorWords.toLowerCase().split(" "); 
  }
  
  lilWords.forEach(function(word){
    let capWord = " " + word.charAt(0).toUpperCase() + word.slice(1); 
    book = book.replace(capWord, " " + word);
  });
  
  return book; 
}

// Original First Pass 
// function titleCase(title, minorWords) {
//   var book = title.toLowerCase();
//   // console.log(book)
//   var lilWords = [];
//   if ( minorWords !== undefined ) {
//     // console.log("h ere")
//     lilWords = minorWords.toLowerCase().split(" "); 
//   }
//   // console.log(lilWords); // []
  
//   book = book.replace(/\w\S*/g, function(word) { return word.charAt(0).toUpperCase() + word.substr(1)})
//   // console.log(book);
  
//   // should be able to get rid of this if, since blank array would just be forEach of nothing.
//   if ( lilWords.length >= 1 ) {
//     // console.log("not empty!")
//     lilWords.forEach(function(word){
//       // Placing the space only before covers for the first letter of the word.
//       let capWord = " " + word.charAt(0).toUpperCase() + word.slice(1); 
//       // console.log(capWord);
//       let wordSpace = " " + word;
//       // console.log(wordSpace);
//       book = book.replace(capWord, wordSpace);
//       // console.log(book);
//     });
//   }
//   return book; 
// }



// DRIVER CODE
// titleCase('a clash of KINGS', 'a an the of'); // 'A Clash of Kings')
// titleCase('THE WIND IN THE WILLOWS', 'The In'); // 'The Wind in the Willows')
titleCase('the quick brown fox'); // 'The Quick Brown Fox'