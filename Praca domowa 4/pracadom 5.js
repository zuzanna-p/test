function groupFamilies(arr) {
 let object = {};
 for (let i = 0; i < arr.length; i++ ) {
  if (!(arr[i]['surname'] in object)) {
      object[arr[i]['surname']] = [];
                 
 }
        object[arr[i]['surname']].push(arr[i].name);
             
     }
     return object;
  }
console.log(groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}]));
console.log(groupFamilies([{"name": "Barack", "surname": "Obama"}, {"name": "Michelle", "surname": "Obama"}, {"name": "Donald", "surname": "Trump"}]))
    