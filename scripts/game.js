
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
let score=0;

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


