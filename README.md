# Simon-Game

![Game start](https://user-images.githubusercontent.com/61579772/84225663-5c07d680-ab12-11ea-994f-0220ffcba658.jpg)

> Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison. It has disc shape, on one of its faces you can see four quadrants, each with a ```color: green, red , Blue and yellow``` in its original version. 
> Hosted @ https://kuria-byte.github.io/Simon-Game/

```
let didn't-understand=null ;

if(didn't-understand){
      click(https://www.youtube.com/watch?v=1Yqj76Q4jJ4)
}else (continue) 

```


# What to learn🤷‍♂️
- 1)Manipulating the DOM using Jquery.
- 2)Handling keyboard events
- 3)Understanding CallBacks
- 4)Website animations using Jquery
- 5)Manipulating styles and text with jquery
- 6)Creating and storing patterns.


# Prerequisites

- > You: What does It take to make such a game
- > Me : Just some small effort and determination
- > You: And some basic understanding on Javascript,HTMl,CSS. 
- > You: What if I'm just here to copy code?
- > Me : Don't worry it's not a crime,you came to the right place!😄
- > Me : Just be sure you understand what you are pasting!


# Introduction 

- > You: So where and how do we start.
- > Me : Set up your project we need four files ```index.js,index.html,styles.css files```
- > You: Those are just three files
- > You: The other one is actuallly a folder containing our sound files.😎

## Step 1
 Let's set up our html and css first.
 ```
 <!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Simon</title>
  <link rel="stylesheet" href="styles.css">
  
</head>

</Body>

//4 Divs each with a unique Id and a class.

</Body>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="index.js" charset="utf-8"></script>
</body>

</html>
 ```
- > Me : I'm actually more concerned on how we position our scripts 
- > You: Yeah,just randomly across the html page.Is there a specific order I should adhere to or something! 🙄
- > Me: Consider this,which came first the chicken or the egg.Hold that thought if you don't know the answer!
- > Me : When our page loads we want to render the html file first so that the user has something to see.
- > You: mhmmm! I'm listening.
- > Me : Then we need to load some styling and lastly the functionality which is our Javascript file.
- > You: So which came first the chicken or ..🤯.
- > Me: Keep going we'll solve this mystery later.



Each button should be silmilar to something similar
```
 <div type="button" id="green" class="btn green">
 ```
- We will use the ID and class names to manupilate the DOM

## Step 2

> Let's set up our functionality file.

- > Me : This is where all the action hapens.```Keyboard events,event listeners,callbacks,DOM manipulation...``` you name it!
- > Me : We'll need to understand a few things before we proceed
- > You: What are those ?🧐

- 1) A way to store the generated random colors.
- 2) How to store colors that the user has clicked on.
- 3) A way to keep track of whether if the game has started.

```
var buttonColors = ["red", "blue", "green", "yellow"];

// Empty array to store the generated random color
var gamePattern=[];

// Empty array that will store the userChosencolor
var userClickedPattern =[];

//You'll need a way to keep track of whether if the game has started or not.
var started = false;

var level = 0;
```

## Step 3

> Now we need a way to detect when a keyboard key has been pressed.This is where JQUERY comes to the rescue.

- > Me : If you have transitioned from manipulating the DOM using vanilla JS,you know the pain of rewriting this.```document.getElementById('This-is-the-real-id');```
- > Me : If not,let me usher you in to the secular world of Jquery. ⭐
- > Me : Let's have a sneak preview of what should change.

![level 1](https://user-images.githubusercontent.com/61579772/84229468-38498e00-ab1c-11ea-870c-afb01003b0c0.jpg)

- > Me : To achieve this you'll realize we have to manipulate the H1 elements immediately the users clicks the keyboard.

```
//Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

$(document).keypress(function() {

  if (!started) {

    //The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

```
- > You: mhmmm! I could understand the code till the ```nextsequence()``` part.
- > Me : Hold that thought.We'll get there in Step 5✔
- > You: Now the game is started,I hear no sound and when I click this buttons nothing happens.
- > Me: Keep going we are still solving the mystery.😏


## Step 4
> We need to figure out how to store the id of the button that got clicked and store them in an array preffarably.

```
$(".btn").click(function(){
  var userChosenColor=$(this).attr("id");
   userClickedPattern.push(userChosenColor);
```
- > Me  : To play the sound of the button that got clicked we define a function that we'll later holla at.😁
- > You : Hola at???????🙂
- > Me  : Calling back a function.

```
  // Javascript to play the sound for the button color selected
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}
```
- > You: What is var audio=new audio.... ?
- > Me : We have a Sound Folder remember?,There we have our five favourite jams stored,
- > Me: We got ```blues,reds,green,yellow and wrong```💯
- > Me: This is how i named my .mp3 files,I'm sure we can all agree that my music taste is phenomenal.🤩

# Step 5
 > This game has some funny logic,let me explain
 
 - >Me : We have randomly generated numbers that represent a random sequence of events.✔
- > Me : The game starts and you are prompted to click one button,then another ,then another✔
- > Me: As long as you keep on clicking the buttons in the right sequence.You are winning!✔
- > Me: And as long as you are winning the computer won't get tired of generating random sequences.✔
- > Me: The minute you hit a wrong button in the game pattern.The game ends and restarts,the computer has no chills!💥
- > You: It's the ultimate memory comparison between man and machine!🧐
- > Me: Exactly! You aren't so damn after all.😁
- > You :Shhhhhhh! How do we implement all that you have said.
- > Me: Keep going the mystery is almost solved.

> lets break it down,this is basically the computers super power! This is how it's able to generate random sequences and store them in array

```
// Generate random  number between 0-3
var randomNumber = Math.floor(Math.random() * 4) ;

// Select random color from Array
var randomChosenColor=buttonColors[randomNumber];

// Adding the randomly Chosen color to the game pattern array
    gamePattern.push(randomChosenColor);
    
```

> This is how it updates the Level and updates the game status.

```
  level++;
  
  $("#level-title").text("Level " + level);

```

Since all of these functions are happening simultaneously,It would be difficult to use each one of them individually.So we'll make gather up all this related functions into a much bigger function.🤯

```
function nextSequence() {
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    // jQuery to animate a flash to the button selected in step .
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);;

}
```

# Step 6

- > Me : We have implemented the full game logic,when the user starts the game and clicks the first button.
- > Me : Let's implement a function to drive the game logic
- > Me: This way we'll have a bigger function that handles and hosts all the other smaller functions.
- > Me: It might sound abit complicated but don't worry,You got this!🤔😣

```
$(".btn").click(function(){
  var userChosenColor=$(this).attr("id");
   userClickedPattern.push(userChosenColor);

   playSound(userChosenColor);
   animatePress(userChosenColor);
   checkAnswer(userClickedPattern.length-1);

});
```
- > You: everything looks fine but what does ``` checkAnswer(userClickedPattern.length-1);''' do?
- > Me : Okay,so remember how our game works cause this is important.
- > Me: When the user clicks the  generataed sequence.The computer needs a way of comparing what the user clicked and  it had in mind.
- > Me: Basically it needs a way to compare whether you are able to match it's randomly generated sequence.😏
- > Me: Below is how this whole idea sounds to the computer😶

```
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
```

# Step 7

> The last part is actually easy

-  Add some styling when the button gets clicked
-  A way to reset the game back to default everytime the user looses.

```
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
```

```
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

```

# Final Step

![Game over](https://user-images.githubusercontent.com/61579772/84233328-b90c8800-ab24-11ea-8a14-3d676c5af400.jpg)

- > Me: You actualy did it and I'm proud you reached this far honestly. 
- > Me: Before you leave I just need a favor
- > You: What laaah!
- > Me: The chicken came first!
- > Me: Just star this repo and let's be friends too!


## Deployment

You can deploy this easily and share it with friends using Github pages
- https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site



## Authors

* **Ian Kuria** 


## License

This project is NOT licensed at all,have fun and enjoy!

## Acknowledgments & Inspiration❤

* Angela.Yu
* https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site
