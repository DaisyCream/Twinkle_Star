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
GAMEING.everRandom = 0;
$$('score').innerHTML = GAMEING.score;
$$('life').innerHTML = GAMEING.life;
GAMEING.showStar = function(){
    var startRandom = parseInt(Math.random()*starFrame.length);
    while(startRandom==GAMEING.everRandom){
        startRandom = parseInt(Math.random()*starFrame.length);
    }
    var starTag = document.createElement('div');
    starTag.setAttribute('class','star');
    starFrame[startRandom].appendChild(starTag);
    starTag.mouseCount = 0;//prevent touch star much times
    var scoreX = getElementLeft(starTag);
    var scoreY = getElementTop(starTag);
    console.log(scoreX);
    console.log(scoreY);

    var isTouch = setTimeout(function(){
        GAMEING.passStar(starTag);
    },1300);

    starTag.onmouseover = function(){
        if(this.mouseCount!=0){
            return;
        }
        this.mouseCount = 1;
        setTimeout(function(){
            console.log('1');
            starTag.removeAttribute('class');
            starTag.setAttribute('class','afterTouchStar');
        },50);
        GAMEING.createScore(scoreX,scoreY);
        GAMEING.touchStar(starTag);
        clearTimeout(isTouch);
    };
    GAMEING.everRandom = startRandom;

    setTimeout(GAMEING.showStar,3000);
};


GAMEING.touchStar = function(target){
    setTimeout(function(){
        target.parentNode.removeChild(target)
    },800);
    setTimeout(function(){
        GAMEING.score++;
        $$('score').innerHTML = GAMEING.score;
    },1800);

};


GAMEING.passStar = function(target){
    target.parentNode.removeChild(target);
    GAMEING.life--;
    $$('life').innerHTML = GAMEING.life;
};


GAMEING.createScore = function(x,y) {
    var score = document.createElement('div');
    score.setAttribute('class', 'scoreAnimation');
    score.innerHTML = '+1';
    score.style.left = x - 10 + 'px';
    score.style.top = y - 10 + 'px';
    document.body.appendChild(score);
    console.log("create true");
    setTimeout(function () {
        GAMEING.scoreLocationChange(score);
    }, 50);
    setTimeout(function () {
        score.parentNode.removeChild(score);
    }, 1800);
};

GAMEING.scoreLocationChange = function(target){
    target.style.top = '0px';
    target.style.left = '0px';
};

/********************************getElement location**************************************/


/***
 * This is get the element's absolute top
 * @param target
 * @returns {Number|number}
 */

var getElementTop = function(target){
    var top = target.offsetTop;
    var current = target.offsetParent;
    while(current!=null){
        top += current.offsetTop;
        current = current.offsetParent;
    }
    return top;
};


/***
 * This is get the element's absolute left
 * @param target
 * @returns {Number|number}
 */


var getElementLeft = function(target){
    var left = target.offsetLeft;
    var current = target.offsetParent;
    while(current!=null){
        left += current.offsetLeft;
        current = current.offsetParent;
    }
    return left;
};

window.onload = function(){
    GAMEING.showStar();
};
