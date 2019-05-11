'use strict';

var guessNumber = '17';
var firstQuestion;
var secondQuestion ;
var goodBye;
var wrongAnswer;

function toAsk() {
    firstQuestion = prompt('Угайдай число', '');
    return firstQuestion;
}
function end() {
    secondQuestion = confirm('Правильно! Хотите продолжить?');
    return secondQuestion;
}

function bye() {
    goodBye = alert('Good Bye!');
    return goodBye;
}

function round() {
toAsk();
if(firstQuestion !== guessNumber && null) {
    while (firstQuestion !== guessNumber) {
        wrongAnswer = prompt('Неверно, попробуй еще', '1 - первая цифра');
        if(wrongAnswer === guessNumber) {
            end();
            if(secondQuestion === true) {
                round();
            } else {
                bye();
                return;
            }
        }
        else if(wrongAnswer === null) {
            bye();
            return;
        } 
    }
} else if (firstQuestion === null) {
    bye(); 
    return;
} else {
    end();
    if(secondQuestion === true) {
        round();
    } else {
        bye();
        return;
    }
}
}

round();

