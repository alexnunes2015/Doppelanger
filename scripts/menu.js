const sndClick = new Audio('./sounds/click.mp3');
const bgSound = new Audio('./sounds/wind.mp3');

setTimeout(() => {
    bgSound.loop=true;
    bgSound.play();
}, 200);

function playClickSound(){
    sndClick.play();
}

function newGame(){
    playClickSound();
}

function continueGame(){
    playClickSound();
}

function quit(){
    playClickSound();
}

function credits(){
    playClickSound();
}