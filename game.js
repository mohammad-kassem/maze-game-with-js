window.addEventListener("load", startGame);

let game_over = false; 
let user_score = 0;


function startGame(){
    let start = document.getElementById("start");
    console.log(start);
    start.addEventListener("mouseover", playGame);
       
}


function playGame(){
    end = document.getElementById("end");
    end.addEventListener("mouseover", winGame);

    let boundaries = document.getElementsByClassName("boundary");
    let n = boundaries.length;
    for (let i = 0; i < n - 1; i ++ ){
        boundaries[i].addEventListener("mouseover", loseGame); 
    }
    
    let out_of_bounds = document.getElementById("game");
    out_of_bounds.addEventListener("mouseleave", gotOutOfBounds);
}
    

function winGame(){
    if (game_over) return;
    else{
        game_over = true;
        let game_status = document.getElementById("status");
        game_status.innerText = "You won";
        user_score += 5;
    }
}

function loseGame(){
    if (game_over) return;
    else{
        game_over = true;
        boundaries = document.getElementsByClassName("boundary")
        let n = boundaries.length;
        for (let i = 0; i < n - 1 ; i ++){
            boundaries[i].classList.add("youlose");
        }
        let game_status = document.getElementById("status");
        game_status.innerText = "You lost";
        user_score -= 10;

    }

}

function gotOutOfBounds(){
    if (game_over) return;
    else{
        game_over = true;
        alert("You cheated!");

    }
}