const user = {
    name: "Marian",
    lastName: "Alvarado",
    age: 21,
    showFullName() {
        return `${this.name} ${user.lastName}`
    }
}

function Person(name, lastName, age) {
    this.name = name
    this.lastName = lastName
    this.age = age;
    this.showFullName = function () {
        return `${this.name} ${this.lastName}`
    }
}

const user2 = new Person('Antonio', 'Quintanilla', 22)

// console.log(user2);

// console.log(user2.showFullName());


// const account = {
//     number: "1092384",
//     amount: 100,
//     deposit(quantity) {
//         this.amount = this.amount + quantity
//     },
//     withdraw(quantity){
//         this.amount = this.amount - quantity
//     }
// }

// account.deposit(100);
// account.withdraw(50);

// console.log(account);


for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}

// Si no funciona estas hecho mierda, si funciona no andas tan perdido despues de todo viejo.