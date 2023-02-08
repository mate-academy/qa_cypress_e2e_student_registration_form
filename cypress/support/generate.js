const { faker } = require('@faker-js/faker');
function generateUser() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phoneNumber = faker.phone.number('##########');
    const randomIndex = Math.round(Math.random() * 2);
    const genders = ['Male', 'Female', 'Other'];
    const gender = genders[randomIndex];
    const hobbies = ['Sports', 'Reading', 'Music'];
    const hobby = hobbies[randomIndex];
    const address = faker.address.streetAddress()
    return { firstName, lastName, email, phoneNumber, gender, hobby, address };
};
module.exports = { generateUser };