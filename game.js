addMap('/./resources/img/background.png', 200);
startHighscore();
moveMap(10);

let santa = new GameObject('/./resources/img/santa/santa0.png', 350, 500, 200);
santa.animate(0, 5, 75);

let grinch = new GameObject('/./resources/img/grinch/grinch0.png', 15, 400, 300);
grinch.animate(0, 5, 120);

function addObstacle() {
    placeObstacle('/./resources/img/obstacles/A.png', 1000 + Math.random() * 1000, 650, 70, 70);

    setInterval( function() {
        addObstacle();
    }, 5000);
}

addObstacle();

santa.isColliding(function() {
    stopGame();
    sendScore('', currentHighscore);
}, 80, 30);

function spaceKeyPressed() {
    santa.img = '/./resources/img/santa-jump/santa-jump0.png';
    santa.animate(0, 3);
    santa.jump(300, 18);
}

function spaceKeyReleased() {
    santa.img = '/./resources/img/santa/santa0.png';
    santa.animate(0, 5);
    santa.cancelJump();
}