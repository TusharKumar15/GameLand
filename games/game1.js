let box = [];
let game_board = document.getElementById("game-board") 

export function tictac(){
    // game_board.innerHTML = "welcome to game 1: tictac";
    let tictac_board = document.createElement("div");
    tictac_board.id = "tictac-board";
    for(let i = 0; i < 9; i++){
        box[i] = document.createElement("div");
        box[i].className = "tt-box";
        // box[i].innerHTML = 0;
        tictac_board.appendChild(box[i]);
        box[i].onclick = () => test(i);
    }
    game_board.appendChild(tictac_board);
}

let box_val = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let count = 1;
let last_input = -1;
let win = false;
let draw = false;

function test(box_no){
    if(win){
        let winmssg = document.createElement("div");
        winmssg.innerHTML = "YOU LOST";
        game_board.appendChild(winmssg);
    }
    else if(draw){
        let drawmssg = document.createElement("div");
        drawmssg.innerHTML ="DRAW";
        game_board.appendChild(drawmssg);
    }
    else {
        box_val[box_no] = 1
        box[box_no].innerHTML = 'X';
        let lc = -1;
        // alert(""+box_val[0]+box_val[1]+box_val[2]+box_val[3]+box_val[4]+box_val[5]+box_val[6]+box_val[7]+box_val[8]);
        if(count == 1){
            if(box_no == 4){
                box_val[0] = -1;
                last_input = 0;
            }
            else {
                box_val[4] = -1;
                last_input = 4
            }
            count++;
        }
        else if(count == 2){
            let a = -1;
            let b = -1;
            let c;
            for(let i = 0; i < 9; i++){
                if(box_val[i] == 1){
                    if(a == -1) a = i;
                    else {
                        b = i;
                    }
                }
                else if(box_val[i] == -1) c = i;
            }
            console.log(""+a+b+c);
            lc = lineComplete(a, b);
            console.log(lc);
            if(lc != -1 && box_val[lc] == 0){
                box_val[lc] = -1;
                last_input = lc;
                count++;
            }
            else {
                for(let i = 0; i < 9; i++){
                    if(box_val[i] == 0){
                        if(i < c){
                            lc = lineComplete(i, c);  
                        }
                        else {
                            lc = lineComplete(c, i);
                        }
                    }
                    if(lc != -1 && lc != a && lc != b){
                        let d, e;
                        if(lc < a){
                            d = lineComplete(lc, a);
                        }
                        else d = lineComplete(a, lc);
                        if(lc < b){
                            e = lineComplete(lc, b);
                        }
                        else e = lineComplete(b, lc);
                        if(d == -1 || e == -1){
                            box_val[i] = -1;
                            last_input = i;
                            count++;
                            break;
                        }
                    }
                }
                if(count == 2){
                    for(let i = 0; i < 9; i++){
                        if(box_val[i] == 0){
                            if(i < c){
                                lc = lineComplete(i, c);  
                            }
                            else {
                                lc = lineComplete(c, i);
                            }
                            if(lc != -1 && lc != a && lc != b) {
                                console.log(i);
                                box_val[i] = -1;
                                last_input = i;
                                count++;
                                break;
                            } 
                        }
                    }

                }
            }
        }
        else {
            let executed = false;
            for(let i = 0; i < 9; i++){
                if(box_val[i] == -1 && i != last_input){
                    if(i < last_input) lc = lineComplete(i, last_input);
                    else lc = lineComplete(last_input, i);
                    if(lc != -1 && box_val[lc] == 0){
                        box_val[lc] = -1;
                        last_input = lc;
                        count++;
                        executed = true
                        console.log("win");
                        win = true;
                        break;
                    }
                }
                
            }
            if(!executed){
                for(let i = 0; i < 9; i++){
                    if(box_val[i] == 1 && i != box_no){
                        if(i < box_no) lc = lineComplete(i, box_no);
                        else lc = lineComplete(box_no, i);
                        console.log(box_val[lc]);
                        if(lc != -1 && box_val[lc] == 0){
                            box_val[lc] = -1;
                            last_input = lc;
                            count++;
                            executed = true;
                            console.log("saved")
                            break;
                        }
                    }
                    
                }
            }
            if(!executed){
                for(let i = 0; i < 9; i++){
                    if(box_val[i] == 0){
                        if(i < last_input){
                            lc = lineComplete(i, last_input);  
                        }
                        else {
                            lc = lineComplete(last_input, i);
                        }
                        if(lc != -1 && box_val[lc] == 0) {
                            box_val[i] = -1;
                            last_input = i;
                            count++;
                            executed = true;
                            console.log("made chance");
                            break;
                        } 
                    }
                }
            }
            let it = 0;
            while(!executed){
                if(box_val[it] == -1){
                    for(let i = 0; i < 9; i++){
                        if(box_val[i] == 0){
                            if(i < it){
                                lc = lineComplete(i, it);  
                            }
                            else {
                                lc = lineComplete(it, i);
                            }
                            if(lc != -1 && box_val[lc] == 0) {
                                box_val[i] = -1;
                                last_input = i;
                                count++;
                                executed = true;
                                console.log("made chance");
                                break;
                            } 
                        }
                    }
                }
                it++;
            }
        }
        console.log(last_input);
        if(count == 5) draw = true;
        box[last_input].innerHTML = "O";
    }
}

function lineComplete(a, b){
// a < b

    if(b - a == 3){
        if(b < 6) return 2*b - a;
        else return 2*a - b;
    }
    if(b - a == 6) return (a+b)/2;
    if(a == 0){
        if(b == 1) return 2;
        if(b == 2) return 1;
        if(b == 4) return 8;
        if(b == 8) return 4;
    }
    if(a == 1){
        if(b == 2) return 0;
    }
    if(a == 2){
        if(b == 4) return 6;
    }
    if(a == 3){
        if(b == 4) return 5;
        if(b == 5) return 4;
    }
    if(a == 4){
        if(b == 5) return 3;
        if(b == 8) return 0;
        if(b == 6) return 2;
    }
    if(a == 6){
        if(b == 7) return 8;
        if(b == 8) return 7;
    }
    if(a == 7) return 6;
    return -1;
}


