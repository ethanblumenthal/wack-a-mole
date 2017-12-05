var board = document.querySelector('#board');
var score = document.querySelector('#score');
var counter = 0;

function createGrid() {
    for (var i = 0; i < 9; i++) {
        var hole = document.createElement('div');
        hole.className = 'hole';
        board.appendChild(hole);
    }
};
createGrid();

var holes = document.querySelectorAll('.hole');

function randomInt(num){
    return Math.floor(Math.random() * num);
}

function createMole(){
    holes[randomInt(9)].style.background = 'black';
}

function deleteMole() {
    holes.forEach(function(e) {
        e.style.background = 'brown';
    });
}

start.addEventListener('click', function() {    
    setInterval(createMole, 500);
    setInterval(deleteMole, 499);
});

holes.forEach(function(e) {    
    e.addEventListener('click', function() {
        if (this.style.background === 'black') {
            counter++;
        }
        score.innerText = 'SCORE: ' + counter;
    });
});