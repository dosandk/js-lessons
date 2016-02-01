function multiply(num, degree) {
    var result = num;

    for (var i = 1; i < degree; i++) {
        result *= num;
    };

    return result;
};

function multiTable() {
    var result,
        separator = "*******";

    for (var fi = 1; fi <= 9; fi++) {
        for (var si = 1; si <= 9; si++) {
            result = fi * si;
            console.log(fi + " * " + si + " = " + result);
        }
        console.log(separator);
    }
};

function multiTable2(obj, times) {
    var result;

    for (var i = 1; i <= times; i++) {
        result = obj * i;
        console.log(obj + " * " + i + " = " + result);
    }

};