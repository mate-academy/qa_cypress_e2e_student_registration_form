import { faker } from '@faker-js/faker';

function generateStudent () {
 const randomNumber = Math.random.toString().slice(2, 11);
 const firstName = faker.internet.userName('Anna', 'Jass');
 const lastName = faker.internet.userName('Boss', 'Jass');
 const email = faker.internet.email();
 const mobileNumber = faker.phone.number('##########');
 const birthDate = '01 Oct 1994';
 const currentAdress = faker.address.streetAddress();

 return {firstName, lastName, email, mobileNumber, birthDate, currentAdress};
}
module.exports = { generateStudent };