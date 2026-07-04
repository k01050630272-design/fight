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