window.addEventListener("load", playGame);
window.addEventListener("load", createScoreBlock);

let game_over = true; 
let user_score = 0;
let interval = 0;

function playGame(){

    let start = document.getElementById("start");
    start.addEventListener("mouseover", startGame);

    let restart = document.getElementById("start");
    restart.addEventListener("click", restartGame);

    end = document.getElementById("end");
    end.addEventListener("mouseover", winGame);

    let boundaries = document.getElementsByClassName("boundary");
    let n = boundaries.length;
    for (let i = 0; i < n - 1; i ++ ){
        boundaries[i].addEventListener("mouseover", loseGame); 
    }
    
    let out_of_bounds = document.getElementById("game");
    out_of_bounds.addEventListener("mouseleave", gotOutOfBounds);

    start.removeEventListener("mouseenter", playGame);
    
    

}
    

function winGame(){
    if (!game_over){
        game_over = true;
        let game_status = document.getElementById("status");
        game_status.innerText = "You won";
        game_status.style = "color: limegreen";
        user_score += 5;
        showScore();
        
    }
}

function loseGame(){
    if (!game_over){
        game_over = true;
        boundaries = document.getElementsByClassName("boundary")
        let n = boundaries.length;
        for (let i = 0; i < n - 1 ; i ++){
            boundaries[i].classList.add("youlose");
        }
        let game_status = document.getElementById("status");
        game_status.innerText = "You lost";
        game_status.style = "color: #ff8888";
        user_score -= 10;
        showScore();
        clearInterval(interval);

    }
}

function gotOutOfBounds(){
    if (!game_over){
        game_over = true;
        alert("You cheated!");
        clearInterval(interval);

    }
}

function createScoreBlock(){
    score_box = document.createElement("h1");
    score_box.id = "score";
    score_box.style.cssText = "text-align: center; font-size: 24px; font-weight: bold; color: dodgerblue;line-height: 1.em";
    objective = document.getElementsByTagName("p")[0];
    objective.parentNode.insertBefore(score_box, objective);
    showScore();
}


function showScore(){
    score_box = document.getElementById("score");
    score_box.innerText = "Score:" + " " + user_score; 

}


function startGame(){
    if (true){
        let start_time = Date.now();
    interval = setInterval(function(){
        time_passed = Date.now() - start_time;
        live_time = document.getElementById("live");
        live_time.innerText = "Live" + " " + (time_passed/1000).toFixed(2);
        },100);
        let game_status = document.getElementById("status");
        game_status.innerText = "Game On!";
        game_over = false;
        boundaries = document.getElementsByClassName("boundary");
        let n = boundaries.length;
        for (let i = 0; i < n -1; i++){
            boundaries[i].classList.remove("youlose");
        }
        playGame();
    }
}



function restartGame(){
    user_score = 0;
    showScore();

}

