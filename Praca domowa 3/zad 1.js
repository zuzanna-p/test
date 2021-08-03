 function displayFullName(name) {

 let nameArray = name.split(" ");

 let sureName = nameArray.pop();
 let firstName = nameArray.join(" ");

      return ("My name is " + sureName + "," + " " + firstName + " " + sureName)
 }
console.log(displayFullName("James Bond"));
console.log(displayFullName("Salvador Felipe Jacinto Dalí"));
console.log(displayFullName("Ada Lovelace"));