function concatArray(wordArray) {
    newArray = wordArray.join(" ");
    for (let i = 0; i < wordArray.length; i++) {
          word = wordArray[i];
        
        }
       return newArray + (".");
    }


console.log(concatArray(["Hello", "this", "is", "dog"]))
console.log(concatArray(["All", "I", "want", "for", "christmas", "is", "you"]))
console.log(concatArray([]))