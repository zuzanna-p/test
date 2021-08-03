"rock"
"scissors"
"paper"

function rockPaperScissors(firstPlayerMove, secondPlayerMove)
{
    if (firstPlayerMove == secondPlayerMove)
    {
        console.log("Draw")
    }
    else if ((firstPlayerMove == "rock" && secondPlayerMove == "scissors") || 
    (firstPlayerMove == "scissors" && secondPlayerMove == "paper") ||
    (firstPlayerMove == "paper" && secondPlayerMove == "rock"))
    {
        console.log("First Player wins")
    }

    else if ((firstPlayerMove == "scissors" && secondPlayerMove == "rock") || 
    (firstPlayerMove == "paper" && secondPlayerMove == "scissors") ||
    (firstPlayerMove == "rock" && secondPlayerMove == "paper"))

    {
        console.log("Second Player wins")
    }
    else 
    {
        console.log ("Argument_error") ;
    }
  
}

rockPaperScissors ("rock", "rock")
rockPaperScissors ("rock", "paper")
rockPaperScissors ("rock", "scissors")
rockPaperScissors ("paper", "scissors")
rockPaperScissors ("paper", "potatoes")
rockPaperScissors ("glue", "scissors")