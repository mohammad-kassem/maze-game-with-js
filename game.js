window.addEventListener("load", startGame);
window.addEventListener("load", showScore);
window.addEventListener("load", addRestartButton);

let game_over = false; 
let user_score = 0;


function startGame(){
    let start = document.getElementById("start");
    console.log("hello");
    start.addEventListener("mouseover", playGame);
       
}


function playGame(){
    let start = document.getElementById("start");
    start.addEventListener("click", restartGame);

    end = document.getElementById("end");
    end.addEventListener("mouseover", winGame);

    let boundaries = document.getElementsByClassName("boundary");
    let n = boundaries.length;
    for (let i = 0; i < n - 1; i ++ ){
        boundaries[i].addEventListener("mouseover", loseGame); 
    }
    
    let out_of_bounds = document.getElementById("game");
    out_of_bounds.addEventListener("mouseleave", gotOutOfBounds);

    let restart_button_area = document.getElementById("restart");
    restart_button_area.addEventListener("click", restartScore);
}
    

function winGame(){
    if (game_over) return;
    else{
        game_over = true;
        let game_status = document.getElementById("status");
        game_status.innerText = "You won";
        user_score += 5;
        showScore();
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
        showScore();

    }

}

function gotOutOfBounds(){
    if (game_over) return;
    else{
        game_over = true;
        alert("You cheated!");

    }
}

function showScore(){
    let score_box = document.getElementsByClassName("example")[0];
    score_box.innerText = "Score:" + " " + user_score; 
    score_box.style.cssText = "text-align: center; font-size: 24px; font-weight: bold; color: dodgerblue; vertical-align: middle";

}

function restartGame(){
    if (game_over){
        game_over = false;
        boundaries = document.getElementsByClassName("boundary");
        let n = boundaries.length;
        for (let i = 0; i < n -1; i++){
            boundaries[i].classList.remove("youlose");
        }
        
    }
    else return;
}


function addRestartButton(){
    let restart_node = document.createElement("div");
    restart_node.setAttribute("id", "restart");
    restart_node.innerHTML = "Restart";
    restart_node.style = "text-align: center; width: 100px; margin: 0 auto; padding: 10px 20px; font-size: 24px; font-weight: bold; color: black; background-color: limegreen; border: 1px solid black; border-radius: 5px;";
    document.body.appendChild(restart_node);
 
}

function restartScore(){
    user_score = 0;
    showScore();
    restartGame();
    game_over = true;
}
