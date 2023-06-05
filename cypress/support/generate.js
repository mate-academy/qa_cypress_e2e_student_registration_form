const { faker } = require('@faker-js/faker');

function generateUser() {
    const genders = faker.helpers.arrayElement(['Female', 'Male', 'Other']);
    const subjects = faker.helpers.arrayElement(['English', 'Computer Science', 'Maths', 'Arts'])
    const hobbies = faker.helpers.arrayElement(['Sports', 'Reading', 'Music']);
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const mobileNumber = faker.phone.number('##########');
    const address = faker.location.streetAddress();

    return { genders, subjects, hobbies, firstName, lastName, email, mobileNumber, address };
}

module.exports = { generateUser };
