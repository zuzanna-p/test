function countOccurences (sentence) {
        let objectTemp = {};
        let i = 0;
         while(i < sentence.length && i!=-1){
             let id = sentence.indexOf(" ", i)
             let word;
             if (id !=-1) {
                 word = sentence.slice(i, id);
                 i = id + 1
             }else {
                 word = sentence.slice(i)
                 i =-1
             }
             if(!(word in objectTemp)) {
                 objectTemp[word] = 0;
             }
             objectTemp[word]++;
         }
         let object = {};
         for (let key in objectTemp) {
             if (!(objectTemp[key] in object)) {
                 object[objectTemp[key]] = [];
             }
             object[objectTemp[key]].push(key)
         }
         return object;
    }
    
    console.log(countOccurences("hello is it you hello hello"));
    console.log(countOccurences("hey mama hey mama"));