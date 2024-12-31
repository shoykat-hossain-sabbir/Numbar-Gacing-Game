

                    // guse gameing 


let one = document.querySelector(".one");
let playerone = document.querySelector(".playerone");
let playeroneinput = document.querySelector(".playeroneinput");
let startbtnone = document.querySelector(".startbtnone");
let playeronepara = document.querySelector(".playeronepara");

let playeronevalue

playeroneinput.addEventListener("keyup", function(){
    playeronepara.innerHTML = ""
});

startbtnone.addEventListener ("click", function() {
    if(playeroneinput.value){
        if(playeroneinput.value -20){
           if(playeroneinput.value > 0 && playeroneinput.value <  10 ){
                playeronevalue = playeroneinput.value
                tow.style.display = "block";
                one.style.display = "none"; 
           }else{
                playeronepara.innerHTML = "Plese Inter Your Number Between 1 to 9!";
           } 
        }else{
            playeronepara.innerHTML = "Plese Inter Your Number Value!";
        }
    }else{
        playeronepara.innerHTML = "Plese Inter Your Input Value!";
    }
});

let tow = document.querySelector(".tow");
let playertow = document.querySelector(".playertow");
let playertowinput = document.querySelector(".playertowinput");
let startbtntow = document.querySelector(".startbtntow");
let playertowpara = document.querySelector(".playertowpara");
let chancetow = document.querySelector(".chancetow");

let chance = 3

playertowinput.addEventListener("keyup", function(){
    playertowinput.innerHTML = ""
});

startbtntow.addEventListener("click", function() {
    if(playertowinput.value){
        if(playertowinput.value -20){
           if(playertowinput.value > 0 && playertowinput.value <  10 ){
               if(playeronevalue == playertowinput.value){
                chancetow.innerHTML = "Player Tow Win!";
               }else{
                chance--
                if(chance != 0){
                    chancetow.innerHTML = "Chance -" + chance; 
                }else{
                    chancetow.innerHTML = "Game Over Player One Win!";
                }
               }
           }else{
                playertowpara.innerHTML = "Plese Inter Your Number Between 1 to 9!";
           } 
        }else{
            playertowpara.innerHTML = "Plese Inter Your Number Value!";
        }
    }else{
        playertowpara.innerHTML = "Plese Inter Your Input Value!";
    }
});