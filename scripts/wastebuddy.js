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


