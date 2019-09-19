# Crystal Game

## Basic instructions
You will be given a random number at the start of the game.

There are four crystals below. By clicking on a crystal, you will add a specific amount of points to your total score.

You win the game by matching your total score to the random number. You lose the game if your total score exceeds the random number.

The value of each crystal is hidden until you click on it. 

Each time when the game starts, the game will change the value of each crystal.

## JQuery And Bootstrap
Here you will find commentary for both elements in the game.

### Bootstrap comments
In this game, I had to utilize both JQuery and Bootstrap in order to bring the page to life. Trying to make the grid items work the way I wanted them to with Bootstrap was quite challenging, but I was able to accomplish places rows inside of columns without having them nest inside the column, but be two separate fields. Customizing the appearance of the overall page was important. I wanted to make the page really look different from the instructions, linked below.

### JQuery Comments
This was a lot of trial and error. Initially I wanted JQuery to generate an array of numbers 1-12, then push the 4 gem images, and then assign each gem a number from the array. I quickly found that there was not a simple way to do that without a lot of repeating code. I instead opted to have the gems in the HTML and then assign the value using an array for each gem. 

Editing the DOM elements was much simpler than I initially wanted, but it involved having the number of losses, wins, and the score put directly into the HTML, and it changes as the game progresses. 

## Give it a go!
Now that you've read all of that, I hope you enjoy!

[Crystal Game](kylerlamont.github.io/unit-4-game/)

## Links
[Javacript](assets/javascript/game.js)
[CSS](assets/css/style.css)
[My Portfolio](kylerlamont.github.io/Responsive-Portfolio)
[Original Assignment Image](https://uwa.bootcampcontent.com/UWA-Bootcamp/UW-SEA-FSF-PT-08-2019-U-C/raw/master/class-content/04-jquery/02-Homework/Instructions/Images/1-CrystalCollector.jpg)
