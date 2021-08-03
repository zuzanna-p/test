const vowel = ['a','e','i','o','u','A','E','I','O','U'];

function findvowel(name)
{   let samo = ""
      for(let i=0; i<name.length; i++)
      {   const obecnaLitera = name[i]
        const  jestSamo = vowel.includes(obecnaLitera)

          if(jestSamo)
        {
              samo += obecnaLitera;
        }
      }
      console.log(samo)
}

findvowel("hello world")
findvowel("kangaroo")
findvowel("cheeseburger")
findvowel("rythm")