/**
 * Created by DaisyCream on 15/10/17.
 */


/***
 * This is get ID
 * @param target
 * @returns {Element}
 */
function $$(target){
    return document.getElementById(target);
}

/********************************Game Start**************************************/
//var GAMESTART = function(){};
//GAMESTART.startBtu = $$('startBtu');
//
//GAMESTART.startBtu.onclick = function(){
//    window.location.href = 'game.html';
//    //GAMEING.showStar();
//};

/********************************Gameing**************************************/
var GAMEING = function(){};
var starFrame = document.getElementsByClassName('starFrame');
GAMEING.score = 0;
GAMEING.life = 3;
$$('score').innerHTML = GAMEING.score;
$$('life').innerHTML = GAMEING.life;
GAMEING.showStar = function(){
    var startRandom = parseInt(Math.random()*starFrame.length);
    var starTag = document.createElement('div');
    starTag.setAttribute('class','star');
    starFrame[startRandom].appendChild(starTag);
    var isTouch = setTimeout(function(){
        GAMEING.passStar(starTag);
        console.log('false');
    },1600);
    starTag.onmouseover = function(){
        GAMEING.touchStar(starTag);
        clearTimeout(isTouch);
        console.log(clearTimeout);
    };
    setTimeout(GAMEING.showStar,1000);
};


GAMEING.touchStar = function(target){
    target.parentNode.removeChild(target);
    GAMEING.score++;
    $$('score').innerHTML = GAMEING.score;
};


GAMEING.passStar = function(target){
    target.parentNode.removeChild(target);
    GAMEING.life--;
    $$('life').innerHTML = GAMEING.life;
};

window.onload = function(){
    GAMEING.showStar();
};
