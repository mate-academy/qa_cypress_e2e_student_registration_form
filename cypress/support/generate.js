const { faker } = require('@faker-js/faker');

function generateUser() {
  const random = function (x) {
    return Math.floor(Math.random() * (x - 1));
  };
  const genders = ['Male', 'Female', 'Other'];
  const hobbiesSelecttion = ['Sports', 'Reading', 'Music'];
  const subjectsList = ['Maths', 'Biology', 'Accounting',
    'Arts', 'Social Studies', 'English', 'Chemistry', 'Computer Science',
    'Commerce', 'Economics', 'History', 'Physics', 'Hindi', 'Civics'];
  const name = faker.person.firstName();
  const email = faker.internet.email();
  const surname = faker.person.lastName();
  const mobile = faker.phone.number('##########');
  const address = faker.location.streetAddress();
  const gender = genders[random(3)];
  const hobbies = hobbiesSelecttion[random(3)];
  const birthday = faker.date.birthdate().toDateString().slice(3);
  const subjects = subjectsList[random(14)];

  return {
    email,
    name,
    surname,
    mobile,
    address,
    gender,
    hobbies,
    birthday,
    subjects
  };
}

function generateIdOfInput(placeholder) {
  return `#${placeholder}`;
}

module.exports = { generateUser, generateIdOfInput };
