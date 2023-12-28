/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const user = {
    firstName: 'Bobby',
    lastName: 'Tester',
    userEmail: 'bobbytester@mail.com',
    gender: 'Male',
    userNumber: '0931231231',
    userBirthDate: '15 Dec 1990',
    userSubject: 'English',
    userHobbie: {
      Sports: 1,
      Reading: 2,
      Music: 3
    },
    userAddress: 'India',
    userState: 'Uttar Pradesh',
    userCity: 'Lucknow'
  };

  it('should successfully register the user', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.userEmail);
    cy.get(`[id^="gender-radio-"][value="${user.gender}"]`).click({ force: true });
    cy.get('#userNumber').type(user.userNumber);
    cy.get('#dateOfBirthInput').type(`{selectAll}${user.userBirthDate}{Enter}`);
    cy.get('#subjectsContainer').type(`${user.userSubject}{Enter}`);
    cy.get(`input[type="checkbox"][value="${user.userHobbie.Music}"]`).check({ force: true });
    cy.get('#currentAddress').type(user.userAddress);
    cy.get('#state').type(`${user.userState}{Enter}`);
    cy.get('#city').type(`${user.userCity}{Enter}`);
    cy.get('#submit').click();

    cy.get('td').should('contain', user.firstName);
    cy.get('td').should('contain', user.lastName);
    cy.get('td').should('contain', user.userEmail);
    cy.get('td').should('contain', user.gender);
    cy.get('td').should('contain', user.userNumber);
    cy.get('td').should('contain', user.userSubject);
    cy.get('td').should('contain', user.userHobbie.Music);
    cy.get('td').should('contain', user.userAddress);
    cy.get('td').should('contain', user.userState);
    cy.get('td').should('contain', user.userCity);
  });
});
