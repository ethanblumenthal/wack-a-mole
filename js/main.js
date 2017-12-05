function createGrid() {
    for (let i = 0; i < 9; i++) {
        var space = document.createElement('div');
        space.className = 'space';
        space.id = i;        
        document.getElementById('grid').appendChild(space);
    }
}
createGrid();

var space = document.querySelectorAll('space');
space.forEach(function(e) {
    var hole = document.createElement('img');
    hole.setAttribute('src', './images/hole.jpg');
    e.appendChild(hole);
});

function createMole() {
    let mole = document.createElement('img');
    mole.setAttribute('src', './images/mole.jpg');
    mole.style.position = 'relative';
    mole.style.zIndex = '+1';
    mole.id = 'mole';
    document.body.appendChild(mole);
}
// interval = setInterval(createMole, 1000);

function updateScore() {
    let score = 0;
    document.getElementById('score').innerHTML = 'Score: ' + score;
    mole.onclick = function() {
        score += 1;
        document.getElementById('score').innerHTML = 'Score: ' + score;
    }
}
updateScore();