function averageMinMax(liczby) {
    let min = Math.min.apply(null, liczby);
    console.log(min);
    let max = Math.max(...liczby)
    console.log(max);
    console.log(eval(liczby.join('+'))/liczby.length)
   
}

averageMinMax([30, 20, 100]);
averageMinMax([-42, 0, 42]);
averageMinMax([-23, -4, -12])