import { faker } from '@faker-js/faker';

const generateUser = () => {
  const firstName = faker.person.firstName('male');
  const lastName = faker.person.lastName('male');
  const email = faker.internet.email();
  const phone = '0984900069';
  const year = '1996';
  const month = 'March';
  const subject = 'Biology';
  const address = faker.location.streetAddress();

  return { firstName, lastName, email, phone, year, month, subject, address };
};

export default generateUser;
