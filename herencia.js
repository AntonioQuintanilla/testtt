// function Person() {
//     this.name = ''
//     this.lastname = ''
// }

// function Programmer() {
//     this.name = ''
//     this.lastname = ''
//     this.language = ''
// }

// Programmer.prototype = new Person()

// console.log(Programmer);
// console.log(Person);

// const person = new Person();
// person.name = 'marco'
// person.lastname = 'aurelio'
// console.log(person);

// const programmer = new Programmer();
// programmer.name = 'ryan'
// programmer.lastname = 'ray'
// programmer.language = 'javascript'
// console.log(programmer);


class Person {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
        this.age = null
    }
}

class Programmer extends Person {
    constructor(language, name, lastname) {
        super(name, lastname)
        this.language = language
    }
}

const person = new Person('ester', 'moreira');
console.log(person);

const programmer = new Programmer('erick', 'mendoza', 'java');
console.log(programmer);