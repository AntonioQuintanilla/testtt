// function Stack() {
//     this.items = []
//     this.push = function(item) {
//         this.items.push(item)
//     }
// }

// const stack = new Stack();
// stack.push('alskdfjasfd')

// const stack2 = new Stack();
// stack2.push(10000)

// console.log(stack);
// console.log(stack2);

// -------------- Subtype Polimorfism


class Person {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
}

class Programmer extends Person {
    constructor(language, name, lastname) {
        super(name, lastname)
        this.language = language
    }
}

const john = new Person('john', 'ray')
const tito = new Programmer('javascript','tito', 'molina')

console.log(john);
console.log(tito);


function writeFullName(p) {
    console.log(`${p.name} ${p.lastname}`)
}

writeFullName(john)
writeFullName(tito)