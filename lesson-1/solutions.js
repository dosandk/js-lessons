var text = "Написать функцию, к-я принимает первый аргумент - число, второй вргумент - степень. Возвращает число возведенное в заданную степень";

function textRepeater1(text, times) {
    var tmpArr = [];

    for (var i = 0; i < times; i++) {
        tmpArr.push(text);
    }

    return tmpArr.join(', ');
}

function textRepeater2(text, times) {
    var newString = '',
        separator = '*';

    for (var i = 0; i < times; i++) {
        newString += text + separator;
    }

    return newString;
}

function turnMeBaby1(text) {
    return text.split('').reverse().join('');
}

function turnMeBaby2(text) {
    var newString = '',
        index = text.length;

    while (index--) {
        newString += text[index];
    }

    return newString;
}

function countWords1(text) {
    return text.split(/[\s,]+/).length;
}

function countWords2(string) {
    var strIter = function(str, currentState, acc) {
        if (str === '') { return acc; }

        var newState,
            newAcc;

        switch (currentState) {
            case 'outsideWord':
                if (str[0] !== ' ') {
                    newState = 'insideWord';
                    newAcc = acc + 1;
                }
                break;
            case 'insideWord':
                newAcc = acc;
                if (str[0] === ' ') {
                    newState = 'outsideWord';
                }
                break;
        }
        return strIter(str.slice(1), newState || currentState, newAcc || acc);
    };

    return strIter(string, 'outsideWord', 0);
}