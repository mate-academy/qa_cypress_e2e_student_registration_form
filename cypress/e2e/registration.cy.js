/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

let user;

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    user = generateUser();
  });

  it('should fill all fields and register user', () => {
    cy.get('[id="firstName"]').type(user.username.firstName);
    cy.get('[id="lastName"]').type(user.username.lastName);
    cy.get('[id="userEmail"]').type(user.email);
    cy.contains('label', `${user.randomGenders}`).click();
    cy.get('[id="userNumber"]').type(user.mobile);
    cy.get('[id="dateOfBirthInput"').type(`{selectAll}${user.birthdate}{enter}`);

    cy.wrap(user.randomSubjects).each((subject) => {
      cy.get('[id="subjectsInput"]').type(`${subject}{enter}`);
    });
    cy.wrap(user.randomHobbies).each((hobby) => {
      cy.contains('label', hobby).click();
    });
    cy.get('[id="currentAddress"]').type(user.address);
    cy.get('[id="state"]').type(`${user.userLocation.state}{enter}`);
    cy.get('[id="city"]').type(`${user.userLocation.city}{enter}`);
    cy.get('[id="submit"]').click();

    cy.get('[id="example-modal-sizes-title-lg"]')
      .should('contain.text', 'Thanks for submitting the form');
    cy.get('td:contains("Student Name")').next('td')
      .should('contain.text', `${user.username.firstName} ${user.username.lastName}`);
    cy.get('td:contains("Student Email")').next('td')
      .should('contain.text', `${user.email}`);
    cy.get('td:contains("Gender")').next('td')
      .should('contain.text', `${user.randomGenders}`);
    cy.get('td:contains("Mobile")').next('td')
      .should('contain.text', `${user.mobile}`);
    cy.get('td:contains("Date of Birth")').next('td')
      .should('contain.text', birthDateMonthToString(user.birthdate));
    cy.get('td:contains("Subjects")').next('td').invoke('text')
      .then((text) => {
        const formattedSubjects = user.randomSubjects.join(', ');
        expect(text.trim()).to.equal(formattedSubjects);
      });
    cy.get('td:contains("Hobbies")').next('td').invoke('text')
      .then((text) => {
        const formattedHobbies = user.randomHobbies.join(', ');
        expect(text.trim()).to.equal(formattedHobbies);
      });
    cy.get('td:contains("Address")').next('td')
      .should('contain.text', `${user.address}`);
    cy.get('td:contains("State and City")').next('td')
      .should('contain.text', `${user.userLocation.state} ${user.userLocation.city}`);
    cy.get('[id="closeLargeModal"]').click();
  });
});

function birthDateMonthToString(date) {
  const [day, month, year] = date.split(' ');

  return `${day} ${month},${year}`;
};
