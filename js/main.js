console.log('main.js loaded');

var mapDisplay = document.querySelector(".map");
var tilesNrDisplay = document.querySelector("#tiles-number-display");
var noFoodMsg = document.querySelector("#no-food-msg");

var defaultFace = '◔◡◔';
var newFace = 'ᗒᗣᗕ';
var eatingFace01 = '◕∇◕';
var eatingFace02 = '´ω｀';
var player = defaultFace;

var emptySpace = '';
var foodSpace = '✿';

var tilesNr = maxMapDim;

tilesNrDisplay.innerText = tilesNr;

redrawMapDisplay();

// Redraw map following array of map sections
function redrawMapDisplay() {
    var i = 0;
    mapDisplay.innerHTML = '';

    while (i < mapObj.length) {
        var mapSection = document.createElement("DIV");
        var mapSectionDisplay = document.createElement("SPAN");
        mapSection.appendChild(mapSectionDisplay);
        mapDisplay.appendChild(mapSection);
        
        if (mapObj[i].hasPlayer) {
            mapSectionDisplay.innerText = player;
            mapSection.id = "player";
            mapSection.addEventListener("click", function(event){
                changeFace();
            });

            if (mapObj[i].hasFood) {
                changeFaceEating(i);
                mapObj[i].hasFood = false;
                playerScore++;
            }

        }
        else {
            mapSectionDisplay.innerText = emptySpace;
            if (mapObj[i].hasFood) {
                mapSectionDisplay.innerText = foodSpace;
                mapSection.className = "food-tile";
            }
        }
        
        i++;
    }

    refreshScore();
}

// Change face to angry face
function changeFace() {
    var playerDisplay = document.querySelector("#player").firstChild;

    playerDisplay.innerText = newFace;
    playerDisplay.style.animation = "shake 0.4s";
    playerDisplay.style.animationIterationCount = "1";
    setTimeout(changeFaceBack,600);
}

function changeFaceBack() {
    var playerDisplay = document.querySelector("#player").firstChild;

    playerDisplay.innerText = defaultFace;
    playerDisplay.style.animation = "";
    playerDisplay.style.animationIterationCount = "0";
}


// Change face to eating face
function changeFaceEating(i) {
    var playerFace = document.querySelector("#player").firstChild;
    
    console.log('Found food on tile ' + i);
    playerFace.innerText = eatingFace01;
    
    // setTimeout(function(){playerFace.innerText = eatingFace02;},400);
    // setTimeout(function(){playerFace.innerText = eatingFace01;},700);
    // setTimeout(function(){playerFace.innerText = eatingFace02;},1000);
    // setTimeout(function(){playerFace.innerText = eatingFace01;},1300);
    setTimeout(changeFaceBack,1000);

}


// Refresh number of flowers
function refreshScore() {
    var playerScoreDisplay = document.querySelector("#player-score-display");

    playerScoreDisplay.innerText = foodCount - playerScore;

    if (foodCount == playerScore) {
        noFoodMsg.style.display = "";
        var playerDisplay = document.querySelector("#player").firstChild;

        playerDisplay.innerText = newFace;
        defaultFace = newFace;
        playerDisplay.style.animation = "shake 0.4s";
        playerDisplay.style.animationIterationCount = "infinite";
    }
}
