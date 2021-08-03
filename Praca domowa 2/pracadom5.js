let liczbaLiter = 0;
let pomniejszenie = "";

function abbrev(ciagZnakow){
    for (i = 0; i <= ciagZnakow.length; i++)
    {
        pomniejszenie = ciagZnakow.slice(0,3)
        liczbaLiter = ciagZnakow.length

    }
 console.log(pomniejszenie + " "+liczbaLiter)

}

abbrev("Nice")
abbrev("I am your father")
abbrev("Supercalifragilisticexpialidocious")
abbrev("!")
abbrev("Yo")