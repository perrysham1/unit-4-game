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

    userTotal2();
});
// hearts
$("#hearts").on("click", function() {
    userTotal = userTotal + randomHearts;
    $("#player").text("Player Total: " + userTotal)

    userTotal2();
});
// clubs
$("#clubs").on("click", function() {
    userTotal = userTotal + randomClubs;
    $("#player").text("Player Total: " + userTotal)

userTotal2();
});
// diamonds
$("#diamonds").on("click", function() {
    userTotal = userTotal + randomDiamonds;
    $("#player").text("Player Total: " + userTotal)

userTotal2();
});
console.log(userTotal);

// win or lose
function userTotal2() {
    if (compNum === userTotal) {
    wins++;
    $("#wins").text("Wins: " + wins);
    reset();

} else if (userTotal > compNum) {
    losses++;

    $("losses").text("Losses: " + losses);
    reset(); 

}}

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
    //$().empty

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    $("#dealer").text("Dealer Total: " + compNum);
}

});