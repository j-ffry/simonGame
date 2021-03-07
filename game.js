// alert('let the games begin');
// console.log($("h1"));
var gamePattern = [];
var userPattern = [];
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence (){
    var randNum = Math.floor(Math.random() * 4);
    var nextColor = buttonColors[randNum];
    // console.log(nextColor);
    gamePattern.push(nextColor);
    // console.log('game pattern ' + gamePattern);
    
    $("#" + gamePattern[gamePattern.length - 1]).fadeOut(250).fadeIn(200);
    var audio = new Audio("sounds/" + gamePattern[0] + ".mp3");
    audio.play();
    
    $("#level-title").html("<h1 id='level-title'>Level " + level + "</h1>");
    level++;
    console.log("game pattern: " + gamePattern);
}

//Play sound to corrisponding user button click

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}


//on load of DOM to activate game/allow for sounds to play

document.addEventListener("load", function(event){

});

// checking which button is pressed
$(".btn").click(function(event){
    var buttonPressed = event.target.id;
    userPattern.push(buttonPressed);
    
    playSound(buttonPressed);
    animatePress(buttonPressed);

    if (userPattern.length === gamePattern.length){
        checkAnswer(gamePattern, userPattern);
    }
    
   


});

//starts game (calls next Sequence function) when user clicks 'here'

$("#startGame").click(function(){
    console.log('game has started');
    nextSequence();
});

//Animates the clicks of the user

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){$("#" + currentColor).removeClass("pressed")}, 100);
}

function checkAnswer(game, user){
    console.log("checkAnswer function called!");
    console.log("game: " + game);
    console.log("user: " + user);
    if (JSON.stringify(game) === JSON.stringify(user)){
        console.log("match!");
        userPattern = [];
        nextSequence();
    } else{
        console.log("wrong!");
        gamePattern = [];
        userPattern = [];
        level = 0;
        console.log(gamePattern);
        nextSequence();
    }
}