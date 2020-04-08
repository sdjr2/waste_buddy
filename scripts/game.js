
// Array of items
let items = ["itemImage1", "itemImage2", "itemImage3", "itemImage4", "itemImage5", "itemImage6", "itemImage7", "itemImage8", "itemImage9", "itemImage10", "itemImage11"];
let itemName = ["Item: null", "Item: coffee cup", "Item: milk container", "Item: fish", "Item: fruits", "Item: paper plate", "Item: juice box", "Item: pop can", "Item: water bottle", "Item: newsprint", "Item: books"];

// Randomizes words
let chosenItem = Math.floor(Math.random() * items.length);

console.log(items[chosenItem]);
console.log(itemName[chosenItem]);

// Displays image
document.getElementById(items[chosenItem]).style.display = "block";

// Displays name
document.getElementById("itemNameText").innerHTML = "<b> " + itemName[chosenItem] + "</b>";

function displayImage(){

}

let currentScore = document.getElementById("currentScore");
let highestScore = document.getElementById("highestScore");
let guesses = document.getElementById("guesses");
let score=0;
let guess = 7; 
function increaseScore() {
    score++;
    currentScore.innerHTML = "Current Score: " + score;
}

function decreaseScore() {
    score--;
    currentScore.innerHTML ="Current Score: " + score;
}


function endGame() {
    alert("You decided to quit! Please click on the leaderboard button to see the scoreboard!");
    alert("Your score is: " + score);
}

/**
//goes inside the wining function
userInput = prompt("You Win! Click on the leaderboard button to view scores.");

    db.collection("users").add({
        score: score
    })
        .then(function (docRef) {
            console.log("The id: " + docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding the document", error);
        });
console.log(name, score);
return;


//goes inside the lossing function. (After the lives end)
userInput = prompt("You Loose! Click on the leaderboard button to view scores.");
db.collection("users").add({
score: score
})
.then(function(){
console.log("Document succesfully added!");
})
.catch(function(error){
console.error("Error adding the document",error);
});
console.log(name,score);

*/


// Clicking and check if item is correct
document.getElementById("recyclables").onclick = checkRecyclables;
document.getElementById("compost").onclick = checkCompost;
document.getElementById("refundables").onclick = checkRefundables;
document.getElementById("mixed paper").onclick = checkMixedPaper;


function checkRecyclables() {
    if(chosenItem == 2 || chosenItem == 3){
        console.log("WIN");
        increaseScore()
    }
    else{
        console.log("DIDN'T YOUR MAMMA TEACH YOU HOW TO RECYCLE???");
        guess--;
        decreaseScore();
        guessesLeft();

    }
}

function checkCompost() {
    if(chosenItem == 4 || chosenItem == 5 || chosenItem == 6){
        console.log("DEVU IS PROUD");
        increaseScore();
    }
    else{
        console.log("GO HOME BRO");
        guess--;
        guessesLeft();
        decreaseScore();
    }
}

function checkRefundables() {
    if(chosenItem == 7 || chosenItem == 8 || chosenItem == 9){
        console.log("DEVU IS PROUD");
        increaseScore();
    }
    else{
        console.log("GO HOME BRO");
        guess--;
        guessesLeft();
        decreaseScore();
    }
}

function checkMixedPaper() {
    if(chosenItem == 10 || chosenItem == 11){
        console.log("WIN");
        increaseScore();
    }
    else{
        console.log("DIDN'T YOUR MAMMA TEACH YOU HOW TO RECYCLE???");
        guess--;
        guessesLeft();
        decreaseScore();
    }

}




function guessesLeft(){

    guesses.innerHTML = "Guesses: " + guess;
    
}

function noLives(){
    checkCompost();
    checkRecyclables();
    checkRefundables()
    checkMixedPaper();

    if(guess==0){
        alert("Sorry! you are out of gueeses. Click on the leaderboard to see the scoreboard!");
        db.collection("users").add({
            score: score
        })
            .then(function (docRef) {
                console.log("The id: " + docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding the document", error);
            });
    console.log(name, score);
    alert("Your score is: " + score);
    return;
    }
}

