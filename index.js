let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")
let countHome = 0
let countAway = 0

function newGame() {
    countHome = 0
    homeEl.textContent = countHome
    countAway = 0
    awayEl.textContent = countAway
}

function increment1home() {
    countHome += 1
    homeEl.textContent = countHome
}

function increment2home() {
    countHome += 2
    homeEl.textContent = countHome
}

function increment3home() {
    countHome += 3
    homeEl.textContent = countHome
}

function increment1away() {
    countAway += 1
    awayEl.textContent = countAway
}

function increment2away() {
    countAway += 2
    awayEl.textContent = countAway
}

function increment3away() {
    countAway += 3
    awayEl.textContent = countAway
}