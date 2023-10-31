// -------------------------------------------------------------------- //
// ------------------------CODE WARS DAILY CHALLENGE------------------- //

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// -------------------------------------------------------------------- //
// ------------------------------PREP METHOD--------------------------- //

// P - Parameters
// We will be given a sting of 'scissors', 'paper', 'rock'.  Looking at the tests written, it looks like we can expect those all to be lower case and spelled correctly.  No tricks!

// R - Returns
// We will be expected to return a string of "Player 1 won!" "Player 2 won!" or "Draw!"

// E - Examples
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// P - Psuedocode
// 1.) take in the inputs
// 2.) If player 1 and 2 selected the same thing, return "draw"
// 3.) (If Player 1 has selected rock AND player 2 has selected scissors) OR (Player 1 has selected Scissors AND player 2 selected paper) OR (Player 1 selected Paper AND player 2 slected rock), return "Player 1 won!"
// 4.) else return "Player 2 won"

// -------------------------------------------------------------------- //
// --------------------------------SOLUTION---------------------------- //

const rps = (p1, p2) => {
    if (p1 === p2) {
        return ("Draw!")
    } else if (p1 == "rock" && p2 == "scissors" || p1 == "scissors" && p2 == "paper" || p1 == "paper" && p2 == "rock") {
        return ("Player 1 won!")
    } else {
        return ("Player 2 won!")
    }
};