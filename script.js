// =========================
// FightForge Mobile Script
// =========================

// HTML 가져오기
const mode = document.getElementById("mode");

const startFight = document.getElementById("startFight");

const redStyle = document.getElementById("redStyle");
const blueStyle = document.getElementById("blueStyle");

const redPerk = document.getElementById("redPerk");
const bluePerk = document.getElementById("bluePerk");

const mission = document.getElementById("mission");

// 랜덤 함수
function random(array){
    return array[Math.floor(Math.random()*array.length)];
}

// 경기 시작
startFight.addEventListener("click",()=>{

    const selectedMode = mode.value;

    const styleList = gameData[selectedMode];

    let red = random(styleList);
    let blue = random(styleList);

    while(red === blue){
        blue = random(styleList);
    }

    redStyle.textContent = "🥊 " + red;
    blueStyle.textContent = "🥊 " + blue;

    redPerk.textContent = random(perks);
    bluePerk.textContent = random(perks);

    mission.textContent = random(missions);

});
// =========================
// 타이머
// =========================

const timer = document.getElementById("timer");
const timerBtn = document.getElementById("timerBtn");

let time = 180;
let interval = null;

function updateTimer(){

    const min = String(Math.floor(time/60)).padStart(2,"0");
    const sec = String(time%60).padStart(2,"0");

    timer.textContent = `${min}:${sec}`;

}

timerBtn.addEventListener("click",()=>{

    if(interval!==null) return;

    timerBtn.textContent="⏸ 진행중";

    interval = setInterval(()=>{

        time--;

        updateTimer();

        if(time<=0){

            clearInterval(interval);

            interval=null;

            timerBtn.textContent="✅ 종료";

            alert("라운드 종료!");

        }

    },1000);

});

updateTimer();
