var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getPassword = function () {
        return this.password;
    };
    Person.prototype.setPassword = function (password) {
        this.password = password;
    };
    Person.prototype.increment = function () {
        Person.counter += 1;
    };
    Person.prototype.getCounter = function () {
        return Person.counter;
    };
    Person.counter = 0;
    return Person;
}());
var person1 = new Person('Jan');
var person2 = new Person('Reza');
// Jan
console.log(person1.name);
// Joel
console.log(person2.name);
// not possible
console.log(person2.password);
console.log(person1.password);
// set password
console.log(person1.setPassword('password of jan'));
// set password of user2
console.log(person2.setPassword('password of reza'));
// 'password of jan'
console.log(person1.getPassword());
// 'password of reza'
console.log(person2.getPassword());
// 0 
console.log(person2.getCounter());
// 0 
console.log(person1.getCounter());
person1.increment();
// 1
console.log(person1.getCounter());
// 1
console.log(person2.getCounter());
person2.increment();
// 2
console.log(person1.getCounter());
// 2
console.log(person2.getCounter());
