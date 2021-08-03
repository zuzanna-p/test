// Cw 2//

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
    (firstPlayerMove == "papier" && secondPlayerMove == "rock"))
    {
        console.log("First Player wins")
    }
    else 
    {
        console.log("Second Player wins")
    }

}

rockPaperScissors ("rock", "rock")
rockPaperScissors ("rock", "paper")
rockPaperScissors ("rock", "scissors")
rockPaperScissors ("paper", "scissors")