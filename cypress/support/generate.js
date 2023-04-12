const { faker } = require('@faker-js/faker');

function generateUser() {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number('##########')
    const birthDate = faker.date.birthdate();
    const address = faker.address.streetAddress();

    return {firstname, lastname, email, phone, birthDate, address}
}

module.exports = { generateUser };