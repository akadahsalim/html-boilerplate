function computerPlay() {
    const arr = ["rock", "paper", "scissors"];
   return (arr[Math.floor(Math.random() * arr.length)]);
}
function playRound(playerSelection, computerSelection) {
    switch(computerSelection) {
        case "rock":
            if(playerSelection == "rock") {
                return "Tie";
            }
            else if(playerSelection == "paper") {
                return ("Player won");
            }
            else {
                return ("Computer won");
            }
        case "paper":
            if(playerSelection == "rock") {
                return ("Computer won");
            }
            else if(playerSelection == "paper") {
                return "Tie";
            }
            else {
                return ("Player won");
            }
        case "scissors":
            if(playerSelection == "rock") {
                return ("Player won");
            }
            else if(playerSelection == "paper") {
                return ("Computer won");
            }
            else {
                return "Tie";
            }
        default:
            break;
    }
}
function playGame() {
    var arr = [0, 0];
    var resultStr = "";
    const confiromation = prompt("Welcome to Rock, Paper, Scissors game!\n type yes to start game", "yes");
    if(confiromation.toLowerCase() != "yes"){
        return;
    }
    for(let i = 1; i <= 5; i++) {
        const playerSelection = getUserInput(i);
        const computerSelection = computerPlay();
        const str = playRound(playerSelection, computerSelection);
        const currentRound = document.getElementById(i);
        currentRound.innerHTML = `Computer choose: ${computerSelection}, Player choose: ${playerSelection} and the round result is ${str}`;
        console.log(`${str} round ${i}`);
        if(str == "Computer won") {
            arr[0]++;
        }
        else if(str == "Player won") {
            arr[1]++;
        }
        console.log(`Computer: ${arr[0]} Player: ${arr[1]} \n\n`);
    }
    const result = document.getElementById("result");
    if(arr[0] > arr[1]) {
        resultStr = "Computer won the game!"
        console.log(resultStr)
        result.innerHTML = resultStr
    }
    else if(arr[1] > arr[0]) {
        resultStr = "Player won the game!"
        console.log(resultStr)
        result.innerHTML = resultStr
    }
    else {
        resultStr = "The game resut is Tie!"
        console.log(resultStr)
        result.innerHTML = resultStr
    }
}
function getUserInput(n) {
    do {
        const input = prompt(`Round ${n}\nChoose rock, paper or scissors`);
        var parsed = input.toLowerCase();
    } while(parsed != "rock" && parsed != "paper" && parsed != "scissors");
    return parsed.toLowerCase();
    }

playGame();