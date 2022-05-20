window.addEventListener("load", startGame);

let game_over = false; 
let user_score = 0;


function startGame(){
    
    let start = document.getElementById("start");
    console.log(start);
    start.addEventListener("mouseover", playGame);
       
}


function playGame(){
    console.log("playing")
}
    

