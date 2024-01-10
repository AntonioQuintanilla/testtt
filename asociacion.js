class Person {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
}


const antonio = new Person('antonio', 'aguilar')
const efesto = new Person('marco', 'aurelio')

antonio.parent = efesto 

console.log(antonio);
console.log(efesto);