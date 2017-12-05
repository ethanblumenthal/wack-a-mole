var board = document.querySelector('#board');
var holes = document.querySelectorAll('.hole');
var start = document.querySelector('#start');
var score = document.querySelector('#score');

function createGrid() {
    for (var i = 0; i < 9; i++) {
        var hole = document.createElement('div');
        hole.className = 'hole';
        board.appendChild(hole);
    }
};
createGrid();

function randomMole() {
    var mole = holes[Math.floor(Math.random() * holes.length)];    
    mole.style.background = 'black';
};

start.addEventListener('click', function() {    
    interval = setInterval(randomMole, 1000);
});

function updateScore() {
    var counter = 0;
    moles.addEventListener('click', function() {
        counter++;
        score.innerText = 'SCORE: ' + counter;
    });
};