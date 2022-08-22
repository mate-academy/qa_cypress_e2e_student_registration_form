import { faker } from '@faker-js/faker';

function generateWorker() {
  const random = Math.random().toString().slice(2, 6);

  const workerFirstName = faker.name.firstName();
  const workerLastName = faker.name.lastName();
  const email = `${workerFirstName}${workerLastName}@mail.com`;
  const age = faker.datatype.number({ min: 18, max: 65, precision: 1 })
  const salary = faker.datatype.number({ min: 10000, max: 25000, precision: 1000 })
  const department = faker.commerce.department();

  return { email, workerFirstName, workerLastName, age, salary, department };
}

module.exports = { generateWorker };

