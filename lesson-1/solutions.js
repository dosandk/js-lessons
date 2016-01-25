function textRepeater(text, times) {
    var tmpArr = [];

    for (var i = 0; i < times; i++) {
        tmpArr.push(text);
    }

    return tmpArr.join(", ");
}

function turnMeBaby(text) {
    return text.split('').reverse().join('');
}

function countWords(text) {
    console.log(text.split(' ').length);
}