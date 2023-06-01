const faker = require('faker');


Cypress.Commands.add('findByPlaceholder', (placeholder) => {
  cy.get(`[placeholder="${placeholder}"]`);
})

function generateUser(){
  
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phone = faker.phone.phoneNumber("#########");
  const gender = faker.random.arrayElement(['Male', 'Female', 'Other']);
  const subjects = faker.random.arrayElement(['English', 'Physics', 'History','Arts','Math']);
  const hobbies = faker.random.arrayElement(['Sports', 'Reading', 'Music']);
  const address = faker.address.streetAddress();
  
  return { firstName, lastName, email, phone, gender, subjects, hobbies, address }; 
}

module.exports = { generateUser };
