

function mssg(){
    alert("hi");
}
let computer = "";
let win = 0;
let lose = 0;
let tie = 0;

function aa(){
let x = Math.floor(Math.random() * 9) + 1;
console.log(x);

if (x <= 3) {
    computer = "rock";
}
else if (x > 3 && x <= 6) {
    computer = "paper";
}
else if (x > 6 && x <= 9) {
    computer = "scissor";
}
console.log(computer);
}

 function rock () {
    aa();
    if (computer === "rock") {
        tie++;
        document.getElementById("result").innerHTML = "Tie";
        document.getElementById("moves").innerHTML = "<pre> You - Rock <br> Computer - Rock </pre>";
        document.getElementById("ties").innerHTML = tie;
        
    }
    else if (computer === "paper") {
        lose++;
        document.getElementById("result").innerHTML = "You Lose";
        document.getElementById("moves").innerHTML = "<pre> You - Rock <br> Computer - Paper </pre>";
        document.getElementById("loses").innerHTML = lose;
        
    }
    else if (computer === "scissor") {
        win++;
        document.getElementById("result").innerHTML = "You Won";
        document.getElementById("moves").innerHTML = "<pre> You - Rock <br> Computer - Scissor </pre>";
        document.getElementById("wins").innerHTML = win;
    }
    else{
        document.getElementById("win").innerHTML = "error";

    }
}

let paper = function () {
    aa();
    if (computer === "rock") {
        ++win;
        document.getElementById("result").innerHTML = "You Won";
        document.getElementById("moves").innerHTML = "<pre> You - Paper <br> Computer - Rock </pre>";
        document.getElementById("wins").innerHTML = win;


    }
    else if (computer === "paper") {
        ++tie;
        document.getElementById("result").innerHTML = "Tie";
        document.getElementById("moves").innerHTML = "<pre> You - Paper <br> Computer - Paper </pre>";
        document.getElementById("ties").innerHTML = tie;

    }
    else if (computer === "scissor") {
        ++lose;
        document.getElementById("result").innerHTML = "You Lose";
        document.getElementById("moves").innerHTML = "<pre> You - Paper <br> Computer - Scissor </pre>";
        document.getElementById("loses").innerHTML = lose;

    }
}

let scissor = function () {
    aa();
    if (computer === "rock") {
        ++lose;
        document.getElementById("result").innerHTML = "You Lose";
        document.getElementById("moves").innerHTML = "<pre> You - Scissor <br> Computer - Rock </pre>";
        document.getElementById("loses").innerHTML = lose;

    }
    else if (computer === "paper") {
        ++win;
        document.getElementById("result").innerHTML = "You Won";
        document.getElementById("moves").innerHTML = "<pre> You - Scissor <br> Computer - Paper </pre>";
        document.getElementById("wins").innerHTML = win;

    }
    else if (computer === "scissor") {
        ++tie;
        document.getElementById("result").innerHTML = "Tie";
        document.getElementById("moves").innerHTML = "<pre> You - Scissor <br> Computer - Scissor </pre>";
        document.getElementById("ties").innerHTML = tie;

    }
}


function reset(){
    win= 0;
    lose= 0;
    tie= 0;
    document.getElementById("wins").innerHTML = win;
    document.getElementById("loses").innerHTML = lose;
    document.getElementById("ties").innerHTML = tie;
    document.getElementById("result").innerHTML = "";
    document.getElementById("moves").innerHTML = "Choose a move from above Icons";

}

