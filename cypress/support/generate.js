import { faker } from '@faker-js/faker';

const randomNumber = Math.random().toString().slice(2, 4)

function generateUser() {
    const name = faker.name.firstName();
    const surname = faker.name.lastName();
    const email = `${name}_${surname}${randomNumber}@mail.com`.toLowerCase();
    const mobilePhone = faker.phone.phoneNumber('067#######');
    const randomIndex = Math.floor(Math.random() * 3);
    const genders = ['Male', 'Female', 'Other'];
    const hobbies = ['Sports', 'Reading', 'Music'];
    const randomStreetNum = Math.floor(Math.random() * 999);
    const address = `${surname} street, ${randomStreetNum}`;


    return {name,
        surname,
        email,
        mobilePhone,
        gender: genders[randomIndex],
        hobby: hobbies[randomIndex],
        address
    }
}




// custom-control custom-checkbox custom-control-inline

module.exports = { generateUser };