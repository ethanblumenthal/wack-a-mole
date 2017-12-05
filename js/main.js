var board = document.querySelector('#board');
var holes = document.querySelectorAll('.hole');

function createGrid() {
    for (var i = 0; i < 9; i++) {
        var hole = document.createElement('div');
        hole.className = 'hole';
        hole.id = i;       
        board.appendChild(hole);
    }
};
createGrid();

// function randomHole() {
        
// };

// function createMole() {
    
// };
// interval = setInterval(createMole, 1000);

function updateScore() {
    let score = 0;
    document.getElementById('score').innerHTML = 'Score: ' + score;
    mole.onclick = function() {
        score += 1;
        document.getElementById('score').innerHTML = 'Score: ' + score;
    }
};
updateScore();