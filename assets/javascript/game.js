$(document).ready(function() {

    var targetNumber = 0;
    targetNumber = Math.floor(Math.random()*101+19);
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);
    

    var wins= 0;
    var losses= 0;
    var totalval= 0;

    var crys1 = Math.floor(Math.random()*11+1);
    var crys2 = Math.floor(Math.random()*11+1);
    var crys3 = Math.floor(Math.random()*11+1);
    var crys4 = Math.floor(Math.random()*11+1);

    $("#blue").on("click", function() {
        totalval = totalval + crys1;
        $("#scoretext").text(totalval);
        winningtest();
    });

    $("#green").on("click", function() {
        totalval = totalval + crys2;
        $("#scoretext").text(totalval);
        winningtest();
    });

    $("#yellow").on("click", function() {
        totalval = totalval + crys3;
        $("#scoretext").text(totalval);
        winningtest();
    });

    $("#red").on("click", function() {
        totalval = totalval + crys4;
        $("#scoretext").text(totalval);
        winningtest();
    });

    function winningtest(){
        if(totalval == targetNumber){
            alert("You've won!");
            wins++;
            $("#wins").text(wins);
            reset();

        } else if(totalval < targetNumber){
            stop();
        
        } else if(totalval > targetNumber) {
            alert("Sorry, try again.");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    }
    

    function reset(){
        targetNumber = Math.floor(Math.random()*101+19);
        console.log(targetNumber);
        $("#number-to-guess").text(targetNumber);
        crys1 = Math.floor(Math.random()*11+1);
        crys2 = Math.floor(Math.random()*11+1);
        crys3 = Math.floor(Math.random()*11+1);
        crys4 = Math.floor(Math.random()*11+1);
        totalval = 0;
        $("#scoretext").text("");
    }
    
});