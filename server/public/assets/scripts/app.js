var meowCount = 0;
var timerCount = 5000;
var clickCount = 3;

$(document).ready(function(){
    init();

});

function init(){

    enable();

    setInterval(checkCount, timerCount);

    console.log("jQuery loads just fine");
}

function enable(){
    $('button').on('click',plusCount);
}

function disable(){
    $('button').off('click',plusCount);
}

function plusCount(){
    meowCount ++;
    if(meowCount%clickCount == 0){
        console.log('Meow');
    }
}

function checkCount (){
    if(meowCount%clickCount == 0){
        console.log('Meow');
    }
}