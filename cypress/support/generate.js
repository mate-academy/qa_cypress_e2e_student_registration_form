const { faker } = require('@faker-js/faker');

function generateUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName}@test.io`;
    // const gender = faker.helpers.arrayElement['Male', 'Female', 'Other'];
    const mobileNumber = faker.phone.number('##########');
    // const subject = faker.helpers.arrayElement['Chemistry', 'Computer Science', 'Physics'];
    // const hobby = faker.helpers.arrayElement['Sport', 'Reading', 'Music'];
    const address = faker.location.streetAddress();
    return {
      firstName,
      lastName,
      email,
      mobileNumber,
      address,
    };
}

module.exports = { generateUser };