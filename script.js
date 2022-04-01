// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
//var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var pattern = [2, 4, 3];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var attemps = 3;
setInterval(updateTimer, 1000);

function startGame(){
  //initialize game variables
  
  time = 10;

  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()
  
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

}

// Sound Synthesis Functions
const freqMap = {
  1: 230,
  2: 279,
  3: 333,
  4: 470,
  5: 320,
  6: 200
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  //context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function loseGameTime(){
  stopGame();
  alert("Game Over. You ran out of time.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(btn == pattern[guessCounter] && time > 0){
    if(guessCounter == progress){
      if(progress == pattern.length - 1 ){
        winGame();
        pattern = newPattern(6, 4);
        cluePauseTime= 333;
        clueHoldTime =1000
        time = 0;
      }else{
        progress++;
        cluePauseTime-= 50;
        clueHoldTime-=200
        playClueSequence();
        time = 10
      }
    }else{
      guessCounter++;
    }
  }else{
    attemps--;
    if(time < 0){
      loseGameTime();
      pattern = newPattern(6, 4);
      cluePauseTime= 333;
      clueHoldTime =1000
      attemps = 3;
      tryCounter();
      time = 0;
    }else if (attemps > 0){
      tryCounter();
    }else{ 
      
      loseGame();
      pattern = newPattern(6, 4);
      cluePauseTime= 333;
      clueHoldTime =1000
      attemps = 3;
      tryCounter();
      time = 0;
    }
    
  }
  
}

function newPattern(squares, lenght){
  var nums = [];
  for(var i = 0; i<lenght; i++){
    nums.push(Math.floor(Math.random() * squares) + 1);
  }
  return nums;
}

function tryCounter(){
  document.getElementById("attemptCounter").innerHTML = "You have "+ attemps + " attemps left";
}

var startTime = 0;
var time = startTime * 10;
const timer = document.getElementById("countDownTimer");

function updateTimer(){
  var secs = time % 60;
  
  secs = secs < 10 ? '0' + secs : secs
  secs%= 11
  timer.innerHTML = "You have "+ `${secs}`+ " seconds"
  time--;
  
  

}


