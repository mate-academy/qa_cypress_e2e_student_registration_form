import { faker } from '@faker-js/faker';

function generateNewUser() {
    const firstname = faker.name.firstName();
    const lastname = faker.name .lastName();
    const email = `${firstname}@gmail.com`.toLowerCase();
    const currentAddress = faker.address.streetAddress();
    const phoneNumber = Math.random().toString().slice(2, 9);




    return {
        firstname,
        lastname,
        email,
        currentAddress,
        phoneNumber
    };
};

module.exports = { generateNewUser };