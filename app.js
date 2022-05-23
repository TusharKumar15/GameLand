import {tictac} from './games/game1.js';
import {sliding_puzzle} from './games/game2.js';
import {sudoku} from './games/game3.js';
import {dice_roll} from './games/game4.js';

console.log("app.js accessible");

let flex_cont = document.getElementById("flex-container");
let tiles = [];
for(let i = 1; i <= 7; i++){
    tiles[i] = document.createElement("div");
    tiles[i].className = "game-tile";
    tiles[i].innerHTML = "tile" + i;
    tiles[i].onclick = () => gameTemplate(i);
    flex_cont.appendChild(tiles[i]);
}

const start_game = (val) => {
    console.log("start_game accessible");
    document.getElementById("board-center").style.display = "none";
    // obj.addEventListener("click", console.log("you clicked on game board"));
    switch(val){
        case 1:
            console.log("game 1 will appear");
            tictac();
            break;
        case 2:
            console.log("game 2 will appear");
            sliding_puzzle();
            break;
        case 3:
            console.log("game 3 will appear");
            sudoku();
            break;
        case 4:
            dice_roll();
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
        default:
        console.log("error");
    }
}

function gameTemplate(val){ 
    console.log("gameTemplate accessible");
    document.getElementById("flex-container").style.display = "none";
    document.getElementById("game-options").style.display = "flex";
    let board = document.getElementById("game-board");
    board.style.display = "flex";
    document.getElementById("start-btn").addEventListener("click",() => start_game(val));
}




