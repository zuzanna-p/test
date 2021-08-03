function translate(slownik, zdanie) {
     let result= " "
         let slowa=[]
         slowa = zdanie.split(" ")
         for (let i=0; i < slowa.length; i++){
             let slowo = slowa[i]
             if (slowo in slownik) {
            
                 result += (slownik[slowo] + " ")
             }
             else{
                 return "error: missing value"
    
            }
        }
         return result;
    
 }
    
console.log(translate({"je": "I", "suis": "am", "pere": "father", "ton": "your"}, "je suis ton pere"));
console.log(translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is cute"));
console.log(translate({"the": "le", "cute": "mignon", "your": "ton", "dog": "chien", "is": "est"}, "the dog is fluffy"))