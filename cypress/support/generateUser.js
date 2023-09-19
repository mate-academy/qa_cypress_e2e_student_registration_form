const { faker } = require('@faker-js/faker');


function generateUser(){
    
    const randomNumber = Math.random().toString().slice(10)
    const username = faker.internet.userName() + randomNumber;
    const email = faker.internet.email();
    const password = 'Passw0rd!';
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    return {username, email, password, firstName, lastName, randomNumber}
}
module.exports = {generateUser}