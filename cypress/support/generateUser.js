import { faker } from '@faker-js/faker';

export default function generateUser() {
  const gender = faker.helpers.arrayElement(['Male', 'Female', 'Other']);
  const fullName = faker.person.fullName(gender);
  const [firstName, lastName] = fullName.split(' ');
  const userName = firstName.toLowerCase() + lastName;
  const email = `${userName}@gmail.com`;
  const phone = faker.phone.number({ style: 'international' }).slice(2);
  const birthDate = faker.date.birthdate().toISOString().split('T')[0];
  const subjects = faker.helpers
    .arrayElements(
      ['Maths', 'English', 'History', 'Biology', 'Physics', 'Arts'],
      { min: 1, max: 2 }
    );
  const hobby = faker.helpers
    .arrayElements(['Sports', 'Reading', 'Music'], 1);

  const address = faker.location.streetAddress(false);

  return {
    firstName,
    lastName,
    email,
    gender,
    phone,
    birthDate,
    subjects,
    hobby,
    address
  };
};
