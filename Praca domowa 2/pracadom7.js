let startowa = 0;
let wynik = 0;

function subDigits(startowa)
{
    if (startowa < 0)
    {
        return "Argument Error"
    }
    else
    {   let wynik = String(startowa).split('').map(Number);
        for (i=0; i<wynik.lenght; i++);
        {
            startowa -= wynik[i];
        }
    }    
    return startowa;
}

console.log(subDigits(12))
console.log(subDigits(4000000))
console.log(subDigits(0))
console.log(subDigits(451))
console.log(subDigits(-12))