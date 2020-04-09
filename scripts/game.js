//time
const TIME = 500;

// Array of items
let items = ["itemImage1", "itemImage2", "itemImage3", "itemImage4", "itemImage5", "itemImage6", "itemImage7", "itemImage8", "itemImage9", "itemImage10", "itemImage11"];
let itemName = ["Item: Garlic", "Item: Coffee Cup", "Item: Milk Container", "Item: Fish", "Item: Fruits", "Item: Paper Plate", "Item: Juice Box", "Item: Pop Can", "Item: Water Bottle", "Item: Newsprint", "Item: Books"];

// Game status
let score = 0;
let life = 3;

// Sets music up
let song = new Audio();
song.src = "src/song.mp3";
let playing = true;

// Sound effects
let wrong = new Audio();
wrong.src = "src/wrong.mp3";

// Controls music
function controlAudio() {
    if (playing == true) {
        document.getElementById("soundIcon").src = "./images/sound.png";
        song.pause();
        playing = false;
        return;
    }
    if (playing == false) {
        document.getElementById("soundIcon").src = "./images/mute.png";
        song.play();
        playing = true;
        return;
    }
}

// Randomizes words
let chosenItem = Math.floor(Math.random() * items.length);

function randomItem() {
    chosenItem = Math.floor(Math.random() * items.length);
    console.log(items[chosenItem]);
    console.log(itemName[chosenItem]);

    // Displays image
    document.getElementById(items[chosenItem]).style.display = "block";

    // Displays name
    document.getElementById("itemNameText").innerHTML = "<b> " + itemName[chosenItem] + "</b>";

    // Clicking and check if item is correct
    document.getElementById("recyclables").onclick = checkRecyclables;
    document.getElementById("compost").onclick = checkCompost;
    document.getElementById("refundables").onclick = checkRefundables;
    document.getElementById("mixed paper").onclick = checkMixedPaper;
}

// opening menu on load
function on() {
    document.getElementById("overlay").style.display = "block";
}

// starts game when opening menu is turned off
function off() {
    document.getElementById("overlay").style.display = "none";
    song.play();
    randomItem();
}

// Overlay answer
function onCheck() {
    wrong.play();
    document.getElementById("overlayCheck").style.display = "block";
}

// Continues game on click
function offCheck() {
    document.getElementById("overlayCheck").style.display = "none";
    randomItem();
}

// Overlay prompting user to restart game
function onRestart() {
    document.getElementById("overlayRestart").style.display = "block";
}

// Restarts the game
function offRestart() {
    location.reload();
}

function checkRecyclables() {
    if (chosenItem == 1 || chosenItem == 2) {
        document.getElementById("answerText").innerHTML = "Correct, well done!";
        score++;
        document.getElementById("lifeText").innerHTML = "Lives: " + life;
        document.getElementById("currentScore").innerHTML = "Score: " + score;
        document.getElementById(items[chosenItem]).style.display = "none";
        onCheck();
    } else {
        document.getElementById("answerText").innerHTML = "DIDN'T YOUR MAMMA TEACH YOU HOW TO RECYCLE???";
        score--;
        life--;
        document.getElementById("lifeText").innerHTML = "Lives: " + life;
        document.getElementById("currentScore").innerHTML = "Score: " + score;
        document.getElementById(items[chosenItem]).style.display = "none";
        onCheck();
        death();
    }
}

function checkCompost() {
    if (chosenItem == 0 || chosenItem == 3 || chosenItem == 4 || chosenItem == 5) {
        document.getElementById("answerText").innerHTML = "DEVU IS PROUD";
        score++;
        document.getElementById("lifeText").innerHTML = "Lives: " + life;
        document.getElementById("currentScore").innerHTML = "Score: " + score;
        document.getElementById(items[chosenItem]).style.display = "none";
        onCheck();
    } else {
        document.getElementById("answerText").innerHTML = "GO HOME BRO";
        score--;
        life--;
        document.getElementById("lifeText").innerHTML = "Lives: " + life;
        document.getElementById("currentScore").innerHTML = "Score: " + score;
        document.getElementById(items[chosenItem]).style.display = "none";
        onCheck();
        death();
    }
}

function checkRefundables() {
    if (chosenItem == 6 || chosenItem == 7 || chosenItem == 8) {
        document.getElementById("answerText").innerHTML = "DEVU IS PROUD";
        score++;
        document.getElementById("lifeText").innerHTML = "Lives: " + life;
        document.getElementById("currentScore").innerHTML = "Score: " + score;
        document.getElementById(items[chosenItem]).style.display = "none";
        onCheck();
    } else {
        document.getElementById("answerText").innerHTML = "GO HOME BRO";
        score--;
        life--;
        document.getElementById("lifeText").innerHTML = "Lives: " + life;
        document.getElementById("currentScore").innerHTML = "Score: " + score;
        document.getElementById(items[chosenItem]).style.display = "none";
        onCheck();
        death();
    }
}

function checkMixedPaper() {
    if (chosenItem == 9 || chosenItem == 10) {
        document.getElementById("answerText").innerHTML = "Correct, well done!";
        score++;
        document.getElementById("lifeText").innerHTML = "Lives: " + life;
        document.getElementById("currentScore").innerHTML = "Score: " + score;
        document.getElementById(items[chosenItem]).style.display = "none";
        onCheck();
    } else {
        document.getElementById("answerText").innerHTML = "DIDN'T YOUR MAMMA TEACH YOU HOW TO RECYCLE???";
        score--;
        life--;
        document.getElementById("lifeText").innerHTML = "Lives: " + life;
        document.getElementById("currentScore").innerHTML = "Score: " + score;
        document.getElementById(items[chosenItem]).style.display = "none";
        onCheck();
        death();
    }
}

function death() {
    if (life == 0) {
        document.getElementById("overlayCheck").style.display = "none";
        setTimeout(function () {
            let userInput = prompt("GAME OVER! No more Lives left. Please enter your name! Click on the leaderboard to see the scoreboard.");
            //databse
            if (userInput != "") {
                db.collection("scores").add({
                        username: userInput,
                        score: score
                    })
                    .then(function (docRef) {
                        console.log("The id: " + docRef.id);
                    })
                    .catch(function (error) {
                        console.error("Error adding the document", error);
                    });
            } else {
                alert("please enter a name!")
                return;
            }
            console.log(name, score);
            alert(userInput + " your score is: " + score);
            onRestart();
            return;
        }, TIME);
    }
}



function endGame() {
    let userInput = prompt("GAME OVER! No more Lives left. Please enter your name! Click on the leaderboard to see the scoreboard.");
    //databse
    if (userInput != "") {
        db.collection("scores").add({
                username: userInput,
                score: score
            })
            .then(function (docRef) {
                console.log("The id: " + docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding the document", error);
            });
    } else {
        alert("please enter a name!")
        return;
    }
    console.log(name, score);
    alert(userInput + " your score is: " + score);
    return;
}


function resetGame() {
    score = 0;
    document.getElementById("currentScore").innerHTML = "Score: ";

    document.getElementById(items[chosenItem]).style.display = "none";
    randomItem();
}

document.getElementById("finishBtn").onclick = endGame;
document.getElementById("restartBtn").onclick = resetGame;

function infoBox() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}