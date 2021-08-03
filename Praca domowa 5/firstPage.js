

document.write("<title>My first (dynamic) webpage</title>");

document.addEventListener("DOMContentLoaded", function () {



let header1 = document.getElementById("header1")
    

    header1.addEventListener("click", function() {
        alert("The Beatles (January 13, 1969)")


    })
let header2 = document.getElementById("header2")
header2.addEventListener("click", function() {
        alert("Carly Rae Jepsen (March 1, 2012)")

})
})