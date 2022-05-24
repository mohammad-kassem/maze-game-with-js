window.addEventListener("load", playGame);
window.addEventListener("load", createScoreBlock);


// defining variables that need to be global
let game_over = true; 
let user_score = 0;
let live_time_interval = 0;
let best_time = Infinity;
let game_time = 0;
let reset_time = 0;




// the game's main function
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
    
    let reset = document.getElementById("start");
    reset.addEventListener("contextmenu", function(event) {event.preventDefault(); updateBestTime(reset_time.toFixed(2))});
}


// resets the game's style to restart the game
function startGame(){
    game_over = false;
    let start_time = Date.now();
    live_time_interval = setInterval(function(){
    time_passed = Date.now() - start_time;
    live_time = document.getElementById("live");
    game_time = (time_passed/1000).toFixed(2);
    live_time.innerText = "Live" + " " +  game_time;
    },100);
    let game_status = document.getElementById("status");
    game_status.style ="color: black";
    game_status.innerText = "Game On!";
    boundaries = document.getElementsByClassName("boundary");
    let n = boundaries.length;
    for (let i = 0; i < n -1; i++){
        boundaries[i].classList.remove("youlose");
    }
}

// resets all of the game's stats except best time 
function restartGame(){
    user_score = 0;
    showScore();
    clearInterval(live_time_interval);
    live_time = document.getElementById("live");
    live_time.innerText = "Live" + " " +  reset_time.toFixed(2);
    updateLastTime(reset_time.toFixed(2));
    startGame();
}

    
//when the user wins
function winGame(){
    if (!game_over){
        game_over = true;
        let game_status = document.getElementById("status");
        game_status.innerText = "You won";
        game_status.style = "color: limegreen";
        user_score += 5;
        showScore();
        clearInterval(live_time_interval);
        updateLastTime(game_time);
        updateBestTime(game_time);
        live_time = document.getElementById("live");
        live_time.innerText = "Live" + " " +  reset_time.toFixed(2);
    }
}


//when the user loses
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
        clearInterval(live_time_interval);
        live_time = document.getElementById("live");
        live_time.innerText = "Live" + " " +  reset_time.toFixed(2);

    }
}


// when the user tries to cheat
function gotOutOfBounds(){
    if (!game_over){
        game_over = true;
        alert("You cheated!");
        clearInterval(live_time_interval);
        live_time = document.getElementById("live");
        live_time.innerText = "Live" + " " +  reset_time.toFixed(2);

    }
}


// creating the score box to add to to the html
function createScoreBlock(){
    score_box = document.createElement("h1");
    score_box.id = "score";
    score_box.style.cssText = "text-align: center; font-size: 24px; font-weight: bold; line-height: 1.3";
    objective = document.getElementsByTagName("h1")[1];
    objective.parentNode.insertBefore(score_box, objective);
    showScore();
}


function showScore(){
    score_box = document.getElementById("score");
    score_box.innerText = "Score:" + " " + user_score; 

}



// update the times by the values given
function updateLastTime(game_time){
    last_time = document.getElementById("last");
    last_time.innerText = "Last" + " " + game_time;

}

function updateBestTime(game_time){
    if (game_time < best_time){
        last_time = document.getElementById("best");
        last_time.innerText = "Best" + " " + game_time;
    }
}