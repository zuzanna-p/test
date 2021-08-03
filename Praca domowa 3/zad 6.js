function elToIndexes(arr) {
   const elToIndexes = {};
 
    for (let i=0; i < arr.length; i++) {
        const el = arr[i];
        
        if (elToIndexes[el]) {
            elToIndexes[el].push(i);
        } else {
            elToIndexes[el] = [i];
         }     }
     return elToIndexes;
 }
 
 function sortedIndexesToBeRemoved(indexesArray) {
     let idexesToBeSliced = [];
     for (let element in indexesArray) {
         const indexes = indexesArray[element];
         const hasDuplicates = indexes.length > 1;
         if (hasDuplicates) {
             indexes.pop() // skip last element;
             idexesToBeSliced = idexesToBeSliced.concat(indexes);
         }
     }
 
     return idexesToBeSliced.sort((a, b) => b - a);
 }
 
 function removeDouble(arr) {
     const elementIndexes = elToIndexes(arr);
     const indexesToBeRemoved = sortedIndexesToBeRemoved(elementIndexes);
 
     indexesToBeRemoved.forEach(function(element) {
         arr.splice(element, 1);
     })
 }
 
 let stuff = ["suit", "clock", "butter", "suit"]
 removeDouble(stuff)
 console.log(stuff)

let mixed = ["hello", "hello", 23, -3, 23, "hello"]
 removeDouble(mixed)
 console.log(mixed)