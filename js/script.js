var elapsedTicks = 0;
var ticksToChange = 40;
var wordSwitchers = document.querySelectorAll(".word-switcher");

function jumbleWord(word) {
  var chars = "@#[]/?!";
  
  word.innerText = _.shuffle(chars.split('')).join('');
}

function randomizeWord(word) {
  var words = word.getAttribute("data-words").split(",");
  
  word.innerText = _.sample(words); 
}

function tick() {
  elapsedTicks++;
  
  if (elapsedTicks < 10) {
    _.each(wordSwitchers, jumbleWord);
  } else if (elapsedTicks == 10) {
    _.each(wordSwitchers, randomizeWord);
  } else if (elapsedTicks > ticksToChange) {
    elapsedTicks = 0;
    ticksToChange = _.random(40, 80);
  }
}

setInterval(tick, 40);