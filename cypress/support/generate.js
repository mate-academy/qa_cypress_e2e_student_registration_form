import { faker } from '@faker-js/faker';

function generateStudent() {
  // const randomNumber = Math.random().toString().slice(2, 6);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = `${firstName}.${lastName}@mail.com`.toLowerCase();

  const randomIndex = Math.floor(Math.random() * 2);
  const genderId = randomIndex + 1;

  const phoneNumber = faker.phone.number('##########');

  const birth = {
    day: Math.ceil(Math.random() * 27),
    month: faker.date.month(),
    year: Math.floor(2000 + Math.random() * 20).toString()
  };

  const hobbies = ['Sports', 'Reading', 'Music'];
  const hobby = hobbies[randomIndex];

  const address = faker.location.streetAddress();

  return {
    firstName,
    lastName,
    email,
    genderId,
    phoneNumber,
    birth,
    hobby,
    address
  };
}

module.exports = { generateStudent };
