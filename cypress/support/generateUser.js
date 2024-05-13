import { faker } from '@faker-js/faker';
function generateUser() {
  const randomNumber = Math.random().toString().search(2, 6);
  const username = faker.internet.userName();
  const user = faker.internet.userName();
  const lastname = faker.internet.userName() + randomNumber;
  const phone = '0971361231123';
  const email = `${username}@gmail.com`;
  const subjects = 'QA';

  return { user, username, lastname, phone, email, subjects };
}
module.exports = { generateUser };
