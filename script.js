var guessNumber = '17';

function toAsk() {
    firstQuestion = prompt('Угайдай число', '');
}
function end() {
    secondQuestion = confirm('Правильно! Хотите продолжить?');
}

function bye() {
    goodBye = alert('Good Bye!');
}

function round() {
toAsk();
if(firstQuestion !== guessNumber) {
    while (firstQuestion !== guessNumber) {
        wrongAnswer = prompt('Неверно, попробуй еще', '1 - первая цифра');
        if(wrongAnswer === guessNumber) {
            end();
            if(secondQuestion === true) {
                round();
            } else {
                bye();
                break;
            }
        }
        else if(wrongAnswer === null) {
            bye();
            break;
        } 
    }
} else {
    end();
    if(secondQuestion === true) {
        round();
    } else {
        bye();
    }
}
}

round();

