class Person {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }

    greet() {
        return `Hello I am ${this.name} ${this.lastname}`
    }
}


const user1 = new Person('Test', 'Poo')
const user2 = new Person('Other', 'One')

console.log(user1.greet());
console.log(user2.greet());