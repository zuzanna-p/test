let obj = {
        "hello": "world",
        "goDeeper": {
           1961: "Barack Obama",
           1964: "Michelle Obama",
           1935: "Elvis Presley",
            1984: {
             "author": "George Orwell",
             "genre": "dystopia",
                }
          }
        }

function hasValueDepth(object, value) {
    for (let key in object) {
        if(typeof(object[key]) === "object") {
            if(hasValueDepth(object[key],value)) {
                return true
            }
        } else {
            if(object[key] === value) {
                return true
            }
        }
        
    }
    return false
}

console.log(hasValueDepth(obj, "hello"))
console.log(hasValueDepth(obj, "Elvis Presley"))
console.log(hasValueDepth(obj, "author"))
console.log(hasValueDepth(obj, "dystopia"))