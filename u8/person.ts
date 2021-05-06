
class Person {
    private password;
    static counter = 0;
    constructor(public name: string) {
    }

    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password
    }
    increment() {
        Person.counter += 1;
    }
    getCounter() {
        return Person.counter;
    }
}

const person1 = new Person('Jan');
const person2 = new Person('Reza');

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
