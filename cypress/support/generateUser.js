import { faker } from '@faker-js/faker';

export function generateUser() {
  const randomBirthDate = faker.date.recent({ days: 36500 });
  const genderArr = ['Male', 'Female', 'Other'];
  const hobbiesArr = ['Sports', 'Reading', 'Music'];
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: faker.helpers.arrayElement(genderArr),
    phone: faker.string.numeric(10),
    birthDate: formatDate(randomBirthDate),
    hobby: faker.helpers.arrayElement(hobbiesArr),
    address: faker.location.streetAddress()
  };
}

export function formatDate(date) {
  const formattedDay = date.getDate().toString().padStart(2, '0');
  const formattedMonth = date.toLocaleDateString('en', { month: 'long' });
  const formattedYear = date.getFullYear();

  return `${formattedDay} ${formattedMonth},${formattedYear}`;
};
