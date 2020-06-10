var buttonColors = ["red", "blue", "green", "yellow"];

// Empty array to store the generated random color
var gamePattern=[];

// Empty array that will store the userChosencolor
var userClickedPattern =[];

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//Create a new variable called level and start at level 0.
var level = 0;

//Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {

  if (!started) {

    //The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


 // create a new variable called userChosencolor to store the id of the button that got clicked and store them in the array.
$(".btn").click(function(){
  var userChosenColor=$(this).attr("id");
   userClickedPattern.push(userChosenColor);

   playSound(userChosenColor);
   animatePress(userChosenColor);
   checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

// Generate random  number between 0-3
function nextSequence(){
  userClickedPattern = [];

// Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

var randomNumber = Math.floor(Math.random() * 4) ;
// Select random color from Array
var randomChosenColor=buttonColors[randomNumber];

// Adding the randomly Chosen color to the game pattern array
    gamePattern.push(randomChosenColor);
// Use jQuery to select the button with the same id as the randomChosencolor
// jQuery to animate a flash to the button selected in step .
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);;



}
  // Javascript to play the sound for the button color selected
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();


}
// add the CSS class .pressed to the button that gets clicked inside animatePress().
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
