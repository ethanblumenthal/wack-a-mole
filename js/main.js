var board = document.querySelector('#board');
var score = document.querySelector('#score');

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
    holes[randomInt(9)].innerHTML = '<img src="css/mole.png">';
}

function deleteMole() {
    holes.forEach(function(e) {
        e.innerHTML = '';
    });
}

start.addEventListener('click', function() {    
    setInterval(createMole, 1000);
    setInterval(deleteMole, 999);
});

holes.forEach(function(e) {
    var counter = 0;    
    e.addEventListener('click', function() {
        if (e.innerHTML === '<img src="css/mole.png">') {
            counter++;
        }
        score.innerHTML = 'SCORE: ' + counter;
    });
});