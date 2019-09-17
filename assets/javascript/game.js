var targetNumber = 0;
targetNumber = Math.floor(Math.random()*120)+19;
console.log(targetNumber)
$("#number-to-guess").html(targetNumber);

var counter = 0;

var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "assets/images/bluegem.jpg");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}