function replaceArray(words) {
    const newWords = []
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (word.charAt(0) === 'h' || word.charAt(0) === 'H') {
        newWords.push(word.toUpperCase())
      } else {
        newWords.push(word)
      }
    }
    console.log(newWords)
    return newWords
  }
  replaceArray(['banana', 'suit', 'hammer'])
replaceArray(["Hello", "there"])
replaceArray(["Hey!", "hey..."])