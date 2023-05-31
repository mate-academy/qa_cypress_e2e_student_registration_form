import faker from 'faker';

describe('Registration Form', () => {
  beforeEach(() => {
    cy.viewport(640, 480);
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all fields with random data and submit the form', () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phoneNumber = faker.phone.phoneNumber('09########');
    const address = faker.address.streetAddress();
    const dateOfBirth = '31 May 2023';
    const state = 'Uttar Pradesh';
    const city = 'Lucknow';

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#gender-radio-1').check({ force: true });
    cy.get('#userNumber').type(phoneNumber);
    
    cy.get('#dateOfBirthInput').click().then(() => {
      cy.get('.react-datepicker__month-select').select('4');
      cy.get('.react-datepicker__year-select').select('2023');
      cy.get('.react-datepicker__day--031').click();
    });
    
    cy.get('.subjects-auto-complete__input input').type('Maths').type('{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type(address);
    
    cy.get('#state').click().type(state + '{enter}');
    cy.get('#city').click().type(city + '{enter}');

    cy.get('#submit').click({ force: true });
  });
});
