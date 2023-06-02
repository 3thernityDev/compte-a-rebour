// On recuppere les element HTML
let inputTime = document.getElementById("inputTime");
let countdownElement = document.getElementById("countdown");
let startButton = document.querySelector("button");

// On définis nos variables
let totalSeconds;
let displayMinutes;
let displaySeconds;
let timer;


// Fonction pour le lancement du  compte à rebour
function startCountdown() {

    // On prend en compte les secondes entrer dans l'input
    totalSeconds = inputTime.value;

    // On fait la conversion pour les minutes et les secondes
    displayMinutes = Math.floor(totalSeconds / 60);
    displaySeconds = totalSeconds % 60;

    // On affiche le compte a rebour 
    countdownElement.textContent = displayMinutes + " minutes " + displaySeconds + " seconds";

    // On désactive la possibilité d'entrer un nouvel input / de lancer à nouveau le compte a rebour 
    inputTime.disabled = true;
    startButton.disabled = true;

    // On lance le compte à rebour avec la fonction countDown définis plus bas
    timer = setInterval(countDown, 1000);
}


// Fonction pour la décrementation des secondes
function countDown() {
    if (totalSeconds >= 0) {
        displayMinutes = Math.floor(totalSeconds / 60);
        displaySeconds = totalSeconds % 60;
        totalSeconds--;


        countdownElement.textContent = displayMinutes + " minutes " + displaySeconds + " seconds";
    } else {

        clearInterval(timer);


        inputTime.disabled = false;
        startButton.disabled = false;
    }
}


startButton.addEventListener("click", startCountdown);
