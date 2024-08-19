import createUserData from '../e2e/createUserData';

describe('Student Registration Form Testing', () => {
  beforeEach(() => {
    cy.visit('/automation-practice-form');
  });

  it('Successfully submits the form without uploading a picture', () => {
    const userData = createUserData();

    cy.fillForm(userData);

    cy.get('button[type="submit"]').click();

    cy.get('.modal-dialog')
      .should('contain.text', 'Thanks for submitting the form');
  });

  it('Checks if submitted data appears correctly in modal window', () => {
    const userData = createUserData();

    cy.fillForm(userData).then(({ state, city }) => {
      cy.get('button[type="submit"]').click();

      cy.verifyUserData(userData, state, city);
    });
  });
});
