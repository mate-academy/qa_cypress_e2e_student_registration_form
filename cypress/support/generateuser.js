const faker = require('faker');

function generateUser() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const address = faker.address.streetAddress();
    const phone  = Math.random().toString().slice(2, 11);;

  return { firstName, lastName, email, address, phone };
}

module.exports = { generateUser };