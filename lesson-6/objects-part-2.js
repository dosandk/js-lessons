// объекты/массивы - передаются по ссылке
// непрямой вызов функций/методов. Методы call/apply/bind
// прототипное наследование в JS. Статические метод Object.create()
// в JS отсутствуют классы, понятие конструктора


var person1 = {
    name: 'John',
    age: '25',
    gender: 'male',
    sayGreeting: function() {
        return 'Hello, my name is ' + this.name;
    }
};

var person2 = {
    name: 'Linda',
    age: 18,
    gender: 'female',
    sayGreeting: function() {
        return 'Hello, my name is ' + this.name;
    }
};

var person3 = {
    name: 'Bob',
    age: 32,
    gender: 'male',
    sayGreeting: function() {
        return 'Hello, my name is ' + this.name;
    }
};

//console.log(person1.sayGreeting());
//console.log(person2.sayGreeting());
//console.log(person3.sayGreeting());

var Person = function() {
    this.person = 'person';
};
var Developer = function() {
    this.developer = 'developer';
};

var personObj = new Person();
var developerObj = new Developer();

//console.log('personObj', personObj);
//console.log('developerObj', developerObj);