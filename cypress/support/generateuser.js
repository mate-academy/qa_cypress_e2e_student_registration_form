import { faker } from '@faker-js/faker';

export function generateuser() {
  const firstname = faker.name.firstName();
  const lastname = faker.name.lastName();
  const email = faker.internet.email();
  const address = faker.address.streetAddress();
  const phone = Math.random().toString().slice(2, 10);

  return { firstname, lastname, email, address, phone };
};
