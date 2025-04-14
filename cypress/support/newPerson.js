const { faker } = require('@faker-js/faker');

const person = () => {
  const sex = faker.person.sexType();
  const normalizeSex = (sex === 'female') ? 'Female' : 'Male';
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const number = faker.string.numeric({ length: 10 });
  const birthDate = faker.date.birthdate({
    min: 18,
    max: 30,
    mode: 'age'
  });
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth();
  const day = birthDate.getDate();

  const mapMonth = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
  const dataBirth = `${day} ${mapMonth[month].slice(0, 3)} ${year}`;
  const checkBirth = `${day} ${mapMonth[month]},${year}`;

  const mapHobbies = {
    1: 'Sports',
    2: 'Reading',
    3: 'Music'
  };
  const hobbies = mapHobbies[faker.number.int({ min: 1, max: 3 })];
  const address = faker.lorem.paragraph(1);

  return {
    firstName,
    lastName,
    email,
    normalizeSex,
    number,
    dataBirth,
    checkBirth,
    hobbies,
    address
  };
};

module.exports = {
  person
};
