function sortWords(arr) {
    let obj = {
        odd: [],
        even: [],
    }
    for (const el in arr) {
        let word = arr[el];
        if (word.length % 2 === 0) {
            obj["even"].push(word);
        } else {
            obj["odd"].push(word);
        }
    }
        return obj;
    }

console.log(sortWords([]));
console.log(sortWords(["work", "hard", "mommy"]))
console.log(sortWords(["oh!", "ah!", "hi", "my"]))