import { faker } from '@faker-js/faker';

function generateUser() {
    const randomIndex = Math.floor(Math.random() * 3);
    const genders = ['Male', 'Female', 'Other'];
    const hobbies = ['Sports', 'Reading', 'Music'];
    const userEmail = faker.internet.email().toLowerCase();
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: userEmail,
      gender: genders[randomIndex],
      hobby: hobbies[randomIndex],
      phoneNumber: faker.phone.number('##########'),
      address: faker.address.streetAddress()
    };
      
    };

    module.exports = {generateUser};

    