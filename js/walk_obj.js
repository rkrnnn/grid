console.log('map_obj loaded');

// Initialize map
var maxMapDim = 6;
var mapWidth = maxMapDim;
var mapHeight = maxMapDim;

var playerObj = {
        x: 0,
        y: 0,
        score: 0
    }

var foodCount = 0;
var mapObj = [];

function initializeMap(h, w) {
    var i = 0;
    while (i < h) {
        var mapRowObj = [];
        var j = 0;
        while (j < w) {
            mapRowObj[j] = {
                x: j,
                y: i,
                hasFood: false
            }
            if (((j % 2) == 0) && (j > 0)) {
                mapRowObj[j].hasFood = true;
                foodCount++;
            }
            j++;
        }
        i++;

        mapObj.push(mapRowObj);
    }
}

initializeMap(mapHeight, mapWidth);


// Move player
function movePlayer(moveX, moveY) {
    var newX = playerObj.x + moveX;
    var newY = playerObj.y + moveY;
    var result = true;

    if (newX >= mapWidth) {
        newX = mapWidth - 1;
        result = false;
    }

    if (newX < 0) {
        newX = 0;
        result = false;
    }

    if (newY >= mapHeight) {
        newY = mapHeight - 1;
        result = false;
    }

    if (newY < 0) {
        newY = 0;
        result = false;
    }

    playerObj.x = newX;
    playerObj.y = newY;

    checkFood();

    console.log(playerObj);
    return result;
}


// Move player right
function moveRight(tilesNrToMove) {
    var result = true;
    var i = 0;
    while ((i < tilesNrToMove) && result) {
        result = movePlayer(1, 0);
        i++;
    }

    return result;
}


// Move player left
function moveLeft(tilesNrToMove) {
    return movePlayer(-tilesNrToMove, 0);
}

// Move player up
function moveUp(tilesNrToMove) {
    return movePlayer(0, -tilesNrToMove);
}


// Move player down
function moveDown(tilesNrToMove) {
    return movePlayer(0, tilesNrToMove);
}

// Check if player found food 
// function checkFood() {
//     if (playerObj.x)

// }