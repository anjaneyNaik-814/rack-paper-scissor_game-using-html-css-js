let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");  //we access the choice class here

const msg = document.querySelector("#msg");

const usercount = document.querySelector("#user-score");
const compcount = document.querySelector("#comp-score");

//To generate the computer choice

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random() * 3);  // this is access the random idex of the given array 
    // Math is built in function and it includes sevetal methods and the floor is used to print whole number 
    return options[randomidx]  
}


const gameDraw =()=>{
    console.log("Game was draw");
    // draw.innerHTML = "Game was Draw";
    msg.innerText  = "Game was Draw! Play again";
    msg.style.backgroundColor = "Black"
}

const showGame = (userWin,userChoice,compChoice) => {
    if(userWin){
        CompScore++;
        compcount.innerText = CompScore
        console.log("You lose a game");
        msg.innerText  = `Computer Won! ${compChoice} beats your  ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
    else{
        userScore++;
        usercount.innerText = userScore;
        console.log("You won the game");
        const mess = document.querySelector("#msg");
        msg.innerText= `You won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
}

//both computer and user choices are called here

const playGame = (userChoice) => {
    console.log("user choice is ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is ",compChoice); 


//apply condition statetment for who will winning the game

    if(userChoice === compChoice){
        gameDraw(); //gameDraw function calling
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){ // computer choice will be either paper or scissor 
            userWin = compChoice === "paper"? true : false;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? true : false;
        }
        else{
            userWin = compChoice === "rock"? true : false;
        }
        showGame(userWin,userChoice,compChoice); // call the showGame function 
    }
    
};

// below code function for USER choice click event

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {  //to add click event in the function
        const userChoice = choice.getAttribute("id");  //this code for the "USER" clickable image id
        playGame(userChoice);
    });
});