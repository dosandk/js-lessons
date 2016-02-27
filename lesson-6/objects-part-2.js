// объекты/массивы - передаются по ссылке
// непрямой вызов функций/методов. Методы call/apply/bind
// прототипное наследование в JS. Статические метод Object.create()
// в JS отсутствуют классы, понятие конструктора

function sayGreetingFunction() {
    return 'Hello, my name is ' + this.name;
}

var person1 = {
    name: 'John',
    age: '25',
    gender: 'male',
    sayGreeting: sayGreetingFunction
};

var person2 = {
    name: 'Linda',
    age: 18,
    gender: 'female',
    sayGreeting: sayGreetingFunction
};

var person3 = {
    name: 'Bob',
    age: 32,
    gender: 'male',
    sayGreeting: sayGreetingFunction
};

var obj = {
    method1: function() {
        console.log('method1');
        console.log(this);
    },
    method2: function() {
        console.log('method2');

        var that = this;

        that.method1();

        $('.selector').on('click', function() {
            that.method1();
        });
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