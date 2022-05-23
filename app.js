import {tictac} from "./games/game1.js";

let start_game = (val) => {
    document.getElementById("board-center").style.display = "none";
    // obj.addEventListener("click", console.log("you clicked on game board"));
    switch(val){
        case 1:
        console.log("game 1 will appear");
        tictac();
        break;
        case 2:
        console.log("game 2 will appear");
        break;
        case 3:
        console.log("game 3 will appear");
        break;
        case 4:
        console.log("game 4 will appear");
        break;
        case 5:
        console.log("game 5 will appear");
        break;
        case 6:
        console.log("game 6 will appear");
        break;
        case 7:
        console.log("game 7 will appear");
        break;
        default :
        console.log("error");
    }
}

function gameTemplate(val){ 
    document.getElementById("flex-container").style.display = "none";
    document.getElementById("game-options").style.display = "flex";
    let board = document.getElementById("game-board");
    board.style.display = "flex";
    document.getElementById("start-btn").addEventListener("click",() => start_game(val));
}

