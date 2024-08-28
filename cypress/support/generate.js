const { faker } = require('@faker-js/faker');

function generateUser() {
    const randomNumber = Math.random().toString().slice(2, 6);
    const username = faker.internet.userName();
    const userLastName = faker.internet.userName();
    const email = `${username}@mail.com`;
    const password = '12345Qwert!';
    const mobileNumber = randomNumber;


    return { email, password, username, userLastName, mobileNumber };
}

module.exports = { generateUser };
