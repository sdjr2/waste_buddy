// Array of items
let items = ["itemImage1", "itemImage2", "itemImage3", "itemImage4", "itemImage5", "itemImage6", "itemImage7", "itemImage8", "itemImage9", "itemImage10", "itemImage11"];
let itemName = ["Item: Garlic", "Item: Coffee cup", "Item: Milk container", "Item: Fish", "Item: Fruits", "Item: Paper Plate", "Item: Juice box", "Item: Pop Can", "Item: Water Bottle", "Item: Newsprint", "Item: Books"];

// Game status
let score = 0;
let life = 3;

// Sets music up
let song = new Audio();
song.src = "src/song.mp3";

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

function checkRecyclables() {
    if (chosenItem == 1 || chosenItem == 2) {
        console.log("WIN");
        window.alert("Correct, well done!");
        score++;
    } else {
        console.log("DIDN'T YOUR MAMMA TEACH YOU HOW TO RECYCLE???");
        window.alert("Not quite, try again!");
        score--;
        life--;
        death();
    }
    document.getElementById("lifeText").innerHTML = "Lives: " + life;
    document.getElementById("currentScore").innerHTML = "Score: " + score;
    document.getElementById(items[chosenItem]).style.display = "none";
    randomItem();
}

function checkCompost() {
    if (chosenItem == 0 ||chosenItem == 3 || chosenItem == 4 || chosenItem == 5) {
        console.log("DEVU IS PROUD");
        window.alert("Correct, well done!");
        score++;
    } else {
        console.log("GO HOME BRO");
        window.alert("Not quite, try again!");
        score--;
        life--;
        death();
    }
    document.getElementById("lifeText").innerHTML = "Lives: " + life;
    document.getElementById("currentScore").innerHTML = "Score: " + score;
    document.getElementById(items[chosenItem]).style.display = "none";
    randomItem();
}

function checkRefundables() {
    if (chosenItem == 6 || chosenItem == 7 || chosenItem == 8) {
        console.log("DEVU IS PROUD");
        window.alert("Correct, well done!");
        score++;
    } else {
        console.log("GO HOME BRO");
        window.alert("Not quite, try again!");
        score--;
        life--;
        death();
    }
    document.getElementById("lifeText").innerHTML = "Lives: " + life;
    document.getElementById("currentScore").innerHTML = "Score: " + score;
    document.getElementById(items[chosenItem]).style.display = "none";
    randomItem();
}

function checkMixedPaper() {
    if (chosenItem == 9 || chosenItem == 10) {
        console.log("WIN");
        window.alert("Correct, well done!");
        score++;
    } else {
        console.log("DIDN'T YOUR MAMMA TEACH YOU HOW TO RECYCLE???");
        window.alert("Not quite, try again!");
        score--;
        life--;
        death();
    }
    document.getElementById("lifeText").innerHTML = "Lives: " + life;
    document.getElementById("currentScore").innerHTML = "Score: " + score;
    document.getElementById(items[chosenItem]).style.display = "none";
    randomItem();
}

function death() {
    if (life == 0) {
        let userInput = prompt("GAME OVER! No more Lives left. Please enter your name! Click on the leaderboard to see the scoreboard.");
        //databse
        if(userInput!=""){
        db.collection("users").add({
            username = userInput,
            score: score
        })
            .then(function (docRef) {
                console.log("The id: " + docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding the document", error);
            });
        } else {
            alert("Please enter your name!");
            return;
        }
        console.log(username, score);
        alert(userInput + " your score is: " + score);
        location.reload();
        return;
    }
}



function endGame() {
    let userInput = prompt("ENDGAME! Please enter your name! Click on the leaderboard to see the scoreboard.");
    //databse
    if(userInput!=""){
    db.collection("users").add({
        username = userInput,
        score: score
    })
        .then(function (docRef) {
            console.log("The id: " + docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding the document", error);
        });
    } else {
        alert("Please enter your name!");
        return;
    }
    console.log(username, score);
    alert(userInput + " your score is: " + score);
    return;
}

function resetGame(){
    score = 0;
    document.getElementById("currentScore").innerHTML = "Score: ";

    document.getElementById(items[chosenItem]).style.display = "none";
    randomItem();
}

document.getElementById("finishBtn").onclick = endGame;
document.getElementById("restartBtn").onclick = resetGame;
