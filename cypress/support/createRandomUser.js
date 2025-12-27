const { faker } = require('@faker-js/faker');

const createRandomUser = () => {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.exampleEmail({ firstName: name });
  const phoneNumber = faker.phone.number();
  const birthdate = faker.date.birthdate();

  return {
    firstName,
    lastName,
    email,
    gender: sex.slice(0, 1).toUpperCase() + sex.slice(1),
    mobile: phoneNumber.replace(/[-\s]/g, ''),
    dateOfBirth: birthdate,
    subjects: ['Biology', 'Art'],
    hobbies: ['Sports'],
    picture: '',
    address: 'Lviv',
    state: 'NCR',
    city: 'Delhi'
  };
};

module.exports = { createRandomUser };
