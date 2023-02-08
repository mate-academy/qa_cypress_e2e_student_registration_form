const { faker } = require('@faker-js/faker');

function generateUser() {
    const randoForHobbies = Math.round(Math.random() *2 );
    const randomIndex = Math.round(Math.random() *2 );
    const genders = ['Male', 'Female', 'Other'];
    const hobbies = ['Sports', 'Reading', 'Music'];
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email().toLowerCase();
    const phone = faker.phone.phoneNumber('0#########')
    const adress = faker.address.streetAddress()
    const state = 'NCR'
    const city = 'Delhi'
    const date = '21 February,2000'
return {
    firstName,
    lastName,
    email,
    phone,
    genders: genders[randomIndex],
    hobbies: hobbies[randoForHobbies],
    adress,
    state,
    city,
    date
}
}
module.exports = {generateUser};