let homeScore = document.getElementById("homeScore");
let questScore = document.getElementById("questScore"); 

let countH = 0;
let countG = 0;

function homeadd1() {
    countH += 1;
    homeScore.textContent = countH
}
function homeadd2() {
    countH += 2;
    homeScore.textContent = countH
}
function homeadd3() {
    countH += 3;
    homeScore.textContent = countH
}
function questadd1() {
    countG += 1;
    questScore.textContent = countG
}
function questadd2() {
    countG += 2;
    questScore.textContent = countG
}
function questadd3() {
    countG += 3;
    questScore.textContent = countG
}