let userScore = 0;
let compScore = 0;

let imgs = document.querySelector(".imgs");
let choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msg");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let alert_msg = document.querySelector(".alert");
let btn = document.querySelector("#btn");
let alert_msg_text = document.querySelector("#alert-msg");





const genCompChoice = () => {
    let game_arr = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return game_arr[idx];
}

const popUpAlert = () => {
    user_score.innerText = userScore;
    comp_score.innerText = compScore;
    alert_msg.classList.remove("notVisible")
    alert_msg.classList.add("visible");
    imgs.classList.add("notClickable");

    btn.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        user_score.innerText = userScore;
        comp_score.innerText = compScore;
        alert_msg.classList.add("notVisible")
        alert_msg.classList.remove("visible");
        imgs.classList.remove("notClickable");
        msg.innerText = "Pick Your Move" ;
        msg.style.backgroundColor = "navy" ;
    })
}


const isDraw = () => {
    console.log("This is a draw !");
    msg.innerText = "This is a draw !";
    msg.style.backgroundColor = "navy";
}

const showMsg = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        msg.innerText = "You are Win !";
        msg.style.backgroundColor = "green";
        userScore++;
        user_score.innerText = userScore;
    }
    else {
        msg.innerText = `You are Lose. computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp_score.innerText = compScore;
    }

    if (userScore === 3) {
        //alert("Congratulations ,You are Winner !");
        alert_msg_text.innerText = "Congratulations ,You are Winner !" ;
        alert_msg.style.backgroundColor = "green" ;
        popUpAlert();

    }
    else if (compScore === 3) {
        //alert("You are Loser ! , Play Again.");
        alert_msg_text.innerText = "You Lose ! , Play Again." ;
        alert_msg.style.backgroundColor = "red" ;
        popUpAlert();
    }
}


const gamePlay = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(compChoice);
    let userWin = true;




    if (userChoice === compChoice) {
        isDraw();
    }
    else if (userChoice == "rock") {
        if (compChoice == "paper") {
            userWin = false; // user is lose.
        }
        else if (compChoice == "scissor") {
            userWin = true; // user is win .
        }
        showMsg(userWin, userChoice, compChoice);
    }
    else if (userChoice == "paper") {
        if (compChoice == "rock") {
            userWin = true; // user is win.
        }
        else if (compChoice == "scissor") {
            userWin = false; // user is lose .
        }
        showMsg(userWin, userChoice, compChoice);
    }
    else if (userChoice == "scissor") {
        if (compChoice == "rock") {
            userWin = false; // user is lose.
        }
        else if (compChoice == "paper") {
            userWin = true; // user is win .
        }
        showMsg(userWin, userChoice, compChoice);
    }



}

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked !", userChoice);
        gamePlay(userChoice);

    });
});


