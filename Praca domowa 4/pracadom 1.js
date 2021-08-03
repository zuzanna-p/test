let obj = {"hello": "bonjour", "my": "mon"};
console.log(hasValue(obj, "bonjour"))
console.log(hasValue(obj, "hello"))
console.log(hasValue(obj, "tasty"))

function hasValue(obj, value) {
    for (let key in obj) {
        if (obj[key] === value) {
            return true;
        }
    }
    return false;
}