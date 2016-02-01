function remove(array) {
    var i = arguments.length;

    while(i++) {
        array.splice(arguments[i], 1);
    }

    return array;
}