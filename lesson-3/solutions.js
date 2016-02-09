function remove(array) {
    var i = arguments.length;

    while(i++) {
        array.splice(arguments[i], 1);
    }

    return array;
}

function merge(firstArray, secondArray) {
    var arraySum = firstArray.concat(secondArray);

    return arraySum.sort(function(a, b) {
        return a - b;
    });
}

function myMap(array, callback) {
    if (typeof callback !== 'function') {
        return array;
    }

    var newArray = [],
        i = 0,
        length = array.length,
        callbackResult;

    for (i; i < length; i++) {
        var currentElement = array[i],
            nextElement = typeof array[i + 1] !== 'undefined' ? array[i + 1] : currentElement;

        console.log('currentElement', currentElement);
        console.log('nextElement ', nextElement);
        console.log('=============');

        callbackResult = callback(currentElement, nextElement);

        newArray.push(callbackResult);
    }

    return newArray;
}

var test1 = myMap([8, 0, 16, 7, 11, 17], function(a, b) {
    return a - b;
});

var test2 = myMap([8, 0, 16, 7, 11, 17], function(a, b) {
    return a * b;
});

console.log(test1);
console.log(test2);

