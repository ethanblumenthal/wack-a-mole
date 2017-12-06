var board = document.querySelector('#board');
var timer = document.querySelector("#timer");
var score = document.querySelector('#score');
var time = 10;
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
    var moleInterval = setInterval(createMole, 600);
    setInterval(deleteMole, 599);
    setInterval(startTimer, 1000);

    function startTimer() {
        time--;
        timer.innerText = 'TIME: ' + time;
        if (time <= 0) {
            clearInterval(moleInterval);            
            timer.innerText = 'GAME OVER';
            document.body.style.background = 'red';
        }
    };
});

holes.forEach(function(e) {    
    e.addEventListener('click', function() {
        if (this.style.background === 'black') {
            counter++;
        }
        score.innerText = 'SCORE: ' + counter;
    });
});