/// <reference types="cypress" />

const faker = require("faker");
function generateUser() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = `${firstName}@mail.com`;
    const phoneNumber = faker.phone.phoneNumberFormat(1);
    const dateOfBirth = faker.date.between('1980-01-01', '2000-12-31').toLocaleDateString('en-US');
    const address = faker.address.streetAddress();
    const subjectsList = [
        'Math',
        'Physics',
        'French',
        'English',
        'Italian',
      ];
    const subject = subjectsList[Math.floor(Math.random() * 5)]
    const genderList = [
        'Female',
        'Male',
        'Other',
      ];
      const gender = genderList[Math.floor(Math.random() * 3)]

    return { firstName, lastName, email, phoneNumber, dateOfBirth, address, subject, gender};
}


module.exports = { generateUser };