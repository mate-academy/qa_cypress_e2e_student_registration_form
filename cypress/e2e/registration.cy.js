/// <reference types='cypress' />

describe('Student Registration page', () => {
  const user = {
    name: 'user12345',
    lastname: 'test',
    email: 'user-test12345@gmail.com',
    sex: 'Male',
    number: '1234567890',
    birthDate: {
      day: '15',
      month: 'April',
      year: '1999'
    },
    subjects: 'English',
    hobbies: 'Sports',
    adress: 'current adress',
    state: 'NCR',
    city: 'Delhi'
  };

  before(() => {
    cy.visit('/');
  });

  it('should sign up successfully', () => {
    cy.get('#firstName').type(user.name);

    cy.get('#lastName').type(user.lastname);

    cy.get('#userEmail').type(user.email);

    cy.contains('label', user.sex).click();

    cy.get('#userNumber').type(user.number);

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__month-select').select(user.birthDate.month);

    cy.get('.react-datepicker__year-select').select(user.birthDate.year);

    cy.get(`.react-datepicker__day--0${user.birthDate.day}`).click();

    cy.get('#subjectsInput').type(`${user.subjects}{Enter}`);

    cy.contains('label', user.hobbies).click();

    cy.get('#currentAddress').type(user.adress);

    cy.get('#state').type(`${user.state}{Enter}`);

    cy.get('#city').type(`${user.city}{Enter}`);

    cy.get('#submit').click();

    cy.get('.modal-content')
      .should('contain.text', 'Thanks for submitting the form')
      .should('contain.text', user.name)
      .should('contain.text', user.lastname)
      .should('contain.text', user.email)
      .should('contain.text', user.sex)
      .should('contain.text', user.number)
      .should('contain.text', user.subjects)
      .should('contain.text', user.hobbies)
      .should('contain.text', user.adress)
      .should('contain.text', user.state)
      .should('contain.text', user.city);
  });
});
