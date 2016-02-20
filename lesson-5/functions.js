// lesson 8
var f = function() {};
var F = new Function();

console.log(f());
console.log(F());

var summ = function(a, b) {
    return a + b;
};

var bar = function(fnArg) {
    var param1 = 3;
    var param2 = 8;

    console.log(fnArg(param1, param2))
};

function makeCounter() {
    var count = 0;

    return function() {
        return count++;
    }
}

var counter = makeCounter();

//console.log(counter());
//console.log(counter());
//console.log(counter());
//console.log(counter());
//console.log(counter());
//console.log(counter());
//console.log(counter());

function foo() {
    console.log(Array.prototype.slice.call(arguments).join());
}