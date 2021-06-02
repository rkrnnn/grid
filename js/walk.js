console.log('walk.js loaded');

// Initialize map
var playerPos = 0;
var maxMapDim = 10;
var playerScore = 0;

var foodCount = 0;
var mapObj = [];

function initializeMap(tilesNr) {
    var i = 0;
    while (i < tilesNr) {
        mapObj[i] = {
            position: i,
            hasFood: false,
            hasPlayer: false
        }
        if (((i % 3) == 0) && (i > 0)) {
            mapObj[i].hasFood = true;
            foodCount++;
        }
        i++;
    }
    mapObj[0].hasPlayer = true;
}

initializeMap(maxMapDim);


// Move player in a direction by one space
function movePlayerInArray(direction) {
    switch (direction) {
        case 'right':
            moveRight(1);
            break;

        case 'left':
            moveLeft(1);
        break;
        
        default:
    }
}


// Move player right
function moveRight(tilesNrToMove) {
    var i = 1;
    while (i <= tilesNrToMove){
        if (playerPos < (maxMapDim - 1)) {
            mapObj[playerPos].hasPlayer = false;
            mapObj[playerPos + 1].hasPlayer = true;
            playerPos++;
            redrawMapDisplay();
        }
        else {
            mapObj[playerPos].hasPlayer = true;
            changeFace();
        }
        i++;
    }
}


// Move player left
function moveLeft(tilesNrToMove) {
    var i = 1;
    while (i <= tilesNrToMove) {
        if (playerPos > 0) {
            mapObj[playerPos].hasPlayer = false;
            mapObj[playerPos - 1].hasPlayer = true;
            playerPos--;
            redrawMapDisplay();
        }
        else {
            mapObj[playerPos].hasPlayer = true;
            changeFace();
        }
        i++;
    }
}