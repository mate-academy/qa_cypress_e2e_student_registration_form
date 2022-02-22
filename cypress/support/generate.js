const {faker} = require('@faker-js/faker');

function usersRandoms() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const address = `${faker.address.zipCode()}, ${faker.address.city()}, ${faker.address.streetAddress()}`
    const phoneNumber = Math.random().toString().slice(2, 12)
    const age = Math.random().toString().slice(2, 4)
    const salary = Math.random().toString().slice(2, 5)
    const department = faker.commerce.department()


    return {firstName, lastName, email, address, phoneNumber, department, age, salary}
}

module.exports = {usersRandoms};