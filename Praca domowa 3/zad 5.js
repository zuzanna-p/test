function evenIndexes(word) {
    let evenIndexArray = [];

    for (let i = 0; i < word.length; i+=2) {
        evenIndexLetter = word[i];
        evenIndexArray.push(evenIndexLetter);
    }
    console.log(evenIndexArray)
}
evenIndexes("lol");
evenIndexes("You're weird");
evenIndexes("");