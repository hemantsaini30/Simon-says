let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","green","purple"];
let started = false;
let level=0;
let h3 = document.querySelector("h3");
let highscore = 0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started");
        started = true;
        levelUp();
    }
    
});

function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    flashbtn(randbtn);

}
function checkans(idx){
    
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if (level > highscore) {
    highscore = level;
    h3.innerHTML = `
        Game Over! Your score was <b>${level}</b><br>
        🎉 New High Score: <b>${highscore}</b><br>
        Press any key to start
    `;
} else {
    h3.innerHTML = `
        Game Over! Your score was <b>${level}</b><br>
        Your High Score was <b>${highscore}</b><br>
        Press any key to start
    `;
}

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },100);
        reset();
    }
}

function btnpress(){
    
    let btn = this;
    userSeq.push(btn.getAttribute("id"));

    checkans(userSeq.length-1);
    flashbtn(btn);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}