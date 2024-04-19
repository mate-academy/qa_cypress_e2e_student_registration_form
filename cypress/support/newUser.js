import { faker } from '@faker-js/faker';

function registerNewUser() {
  const randomIndex = Math.floor(Math.random() * 3);
  const genders = ['Male', 'Female', 'Other'];
  const randomDay = Math.floor(Math.random() * 29);
  const months = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const randomYear = Math.floor(Math.random() * 67 + 1940);
  const hobbies = ['Sports', 'Reading', 'Music'];
  const subjects = ['History', 'Chemistry', 'Music',
    'Geography', 'Mathematics'];

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: genders[randomIndex],
    phone: faker.phone.number('##########'),
    birthday: `${randomDay} ${months[randomIndex]},${randomYear}`,
    subjects: subjects[randomIndex],
    hobbie: hobbies[randomIndex],
    address: faker.location.streetAddress()
  };
}

module.exports = registerNewUser;
