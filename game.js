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