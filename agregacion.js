const company = {
    name: "fazt tech",
    employees: []
}

class Person {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
}

const antonio = new Person('antonio', 'aguilar')
const efesto = new Person('marco', 'aurelio')


company.employees.push(antonio)
company.employees.push(efesto)

console.log(company);