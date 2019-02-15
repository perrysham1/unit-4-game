$(document).ready(function() {
// declare variables for counter
var wins = 0;
var losses = 0;
var userTotal = 0;

// initiates random number for dealer & displays value
var compNum = Math.floor(Math.random() * 60) + 40;
var randomSpades = Math.floor(Math.random() * 10) + 1;
var randomHearts = Math.floor(Math.random() * 10) + 1;
var randomClubs = Math.floor(Math.random() * 10) + 1;
var randomDiamonds = Math.floor(Math.random() * 10) + 1;

$("#dealer").text("Dealer Total: " + compNum);

// onclick sums random card value
// spades
$("#spades").on("click", function() {
    userTotal = userTotal + randomSpades;
    $("#player").text("Player Total: " + userTotal)
});
// hearts
$("#hearts").on("click", function() {
    userTotal = userTotal + randomHearts;
    $("#player").text("Player Total: " + userTotal)
});
// clubs
$("#clubs").on("click", function() {
    userTotal = userTotal + randomClubs;
    $("#player").text("Player Total: " + userTotal)
});
// diamonds
$("#diamonds").on("click", function() {
    userTotal = userTotal + randomDiamonds;
    $("#player").text("Player Total: " + userTotal)
});

// win or lose
if (compNum === userTotal) {
    wins++;
    $("#wins").text("Wins: " + wins);
    reset();

} else if (userTotal > compNum) {
    losses++;

    $("losses").text("Losses: " + losses);
    reset(); 
} else {
    console.log(wins);
}

// displays wins and losses
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

// reset
function reset() {
    var compNum = Math.floor(Math.random() * 100) + 40;
    var randomSpades = Math.floor(Math.random() * 10) + 1;
    var randomHearts = Math.floor(Math.random() * 10) + 1;
    var randomClubs = Math.floor(Math.random() * 10) + 1;
    var randomDiamonds = Math.floor(Math.random() * 10) + 1;

    userTotal = 0;

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
}

});