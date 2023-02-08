/// <reference types='cypress' />
const Faker = require('faker');

describe('Student Registration page', () => {

  const randomGender = Math.floor(Math.random() * 3) + 1;
  const genders = [1, 'Male', 'Female', 'Other'];
  const pickedGender = genders[randomGender];

  const randomHobbie = Math.floor(Math.random() * 3) + 1;
  const hobbies = [1, 'Sports', 'Reading', 'Music'];
  const pickedHobbies = hobbies[randomHobbie];

  const firstName = Faker.name.firstName();
  const lastName = Faker.name.lastName();
  const email = Faker.internet.email(firstName, lastName);
  const mobileNumber = Faker.phone.phoneNumberFormat(0).replace(/\D/g, '').slice(0, 10);
  const dateOfBirth = Faker.date.between("1930-01-01", "2003-01-01").toDateString();

  let BirthYear = dateOfBirth.slice(-4);
  let BirthMonth = dateOfBirth.slice(4, 7);
  let BirthDate = dateOfBirth.slice(8, 10);
   
  const currentAddress = Faker.address.streetAddress();

  before(() => {
    cy.visit('/');
    cy.viewport(1200, 1200)
  });

  it('', () => {

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get(`[for = "gender-radio-${randomGender}"]`).click();
    cy.get('#userNumber').type(mobileNumber);
    cy.get(`#dateOfBirthInput`).type(`{selectAll}${dateOfBirth}{enter}`);
    cy.get('.subjects-auto-complete__value-container').type('e{enter}');
    cy.get(`[for = "hobbies-checkbox-${randomHobbie}"]`).click();
    cy.get('#currentAddress').click().type(currentAddress);
    cy.get('#state').type('{downArrow}{enter}');
    cy.get('#city').type('{downArrow}{enter}');
    cy.get('#submit').click();

    cy.get('.modal-body').should('contain', firstName);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', email);
    cy.get('.modal-body').should('contain', mobileNumber);
    cy.get('.modal-body').should('contain', "English");
    cy.get('.modal-body').should('contain', "Uttar Pradesh Lucknow");
    cy.get('.modal-body').should('contain', BirthYear);
    cy.get('.modal-body').should('contain', BirthMonth);
    cy.get('.modal-body').should('contain', BirthDate);
    cy.get('.modal-body').should('contain', pickedGender);
    cy.get('.modal-body').should('contain', pickedHobbies);    

  });
});
