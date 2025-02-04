
    const choices = ["stone", "paper", "scissors"];
    const userScoreEl = document.getElementById("your_score");
    const computerScoreEl = document.getElementById("computer_score");
    const resultEl = document.getElementById("show_result");
    let select = document.getElementById("text");
    let selected = document.getElementById("text2")
    let userScore = 0;
    let computerScore = 0;

    document.querySelectorAll(".start-game img").forEach((img, index) => {
        img.addEventListener("click", function () {
            const userChoice = choices[index];
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            const result = getResult(userChoice, computerChoice);
            updateScore(result);
            score();
            resultEl.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
            console.log(userChoice === computerChoice)
            console.log(userChoice, computerChoice)
            select.innerHTML = userChoice
            selected.innerHTML = computerChoice
            if(
                (userChoice === "stone" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "stone") ||
                (userChoice === "scissors" && computerChoice === "paper")
            ) {
               
            }
        });
    });

    function getResult(user, computer) {
        if (user === computer) {
            resultEl.style.color = "purple"
            return "It's a draw!";
        }

        if (
            (user === "stone" && computer === "scissors") ||
            (user === "paper" && computer === "stone") ||
            (user === "scissors" && computer === "paper")
        ) {
            return "You win!";
        } else {
            return "Computer win!";
        }
    }

    function updateScore(result) {
        if (result === "You win!") {
            userScore++;
            userScoreEl.textContent = userScore;
            resultEl.style.color = "blue"
        } else if (result === "Computer win!") {
            computerScore++;
            computerScoreEl.textContent = computerScore;
            resultEl.style.color = "red"
        }
    }

    const button = document.getElementById("restartBtn")
    const start = document.querySelector(".start-game")
    function score() {
        if (userScore === 10 || computerScore === 10) {
            button.style.display = "block"
            start.style.display = "none"
            console.log(userScore, computerScore)
            start.style.cursor = "not-allow"
        }

    }

    button.addEventListener("click", function(){
        userScore = 0;
        computerScore = 0;
        userScoreEl.textContent = 0; 
        computerScoreEl.textContent = 0;
        start.style.display = "block"
        start.style.display = "flex"
        if (userScore === 0 || computerScore === 0) {
            button.style.display = "none"
            resultEl.textContent = "";
        }
    });

    let loading = 0;
    function loadingPersent() {
        if (loading <= 100) {
            document.getElementById("loading_bar").style.width = loading + "%";
            document.getElementById("persent").innerText = loading + "%";
            loading ++;
            setTimeout(loadingPersent, 50); 
        } 

    }
    loadingPersent();

    // let gameInfo = document.querySelector(".game-info");
    // window.onload = function () {
    //     gameInfo.style.display = "block"
    //     document.getElementById("loading_bar").style.display = "none";
    //     document.getElementById("persent").style.display = "none";

        

    // }

   