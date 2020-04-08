
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
document.getElementById("itemName").innerHTML = "<b> " + itemName[chosenItem] + "</b>";


