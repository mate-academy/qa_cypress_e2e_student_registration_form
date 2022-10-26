const faker = require('faker');

function generateUser() {
    const randomS = Math.random().toString().slice(2, 6);
    const randomAge = Math.random().toString().slice(2, 3);
    const firstN = faker.name.firstName();
    const lastN = faker.name.lastName();
    const mail = faker.internet.email();
    const ageU = randomAge;
    const salaryU = randomS;
    const departUer = faker.commerce.department();

    return { firstN, lastN, mail, ageU, salaryU, departUer  };
}

module.exports = { generateUser };