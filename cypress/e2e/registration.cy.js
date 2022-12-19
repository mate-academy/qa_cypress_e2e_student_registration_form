/// <reference types='cypress' />

describe('Student Registration page', () => {

  const randRadio = 'gender-radio-' + Math.ceil(Math.random() * 3);
  const randCheckbox = 'hobbies-checkbox-' + Math.ceil(Math.random() * 3);
  const randPhone = Math.random().toString().slice(2, 12)
  const randLetter = 'utarpdeshynj'.slice((randPhone.slice(0,1)), (Number(randPhone.slice(0,1)) + 1))
  const randName = randLetter + 'name' + Math.random().toString().slice(2, 6);

  /*Fill all fields in forms except "picture".*/
  it('allows to fill the \"Student Registration Form\" and submit it', () => {
    cy.visit('/')
    cy.get('#firstName').type(randName)
    cy.get('#lastName').type(`${randName}son`)
    cy.get('#userEmail').type(`${randName}@mail.com`)
    cy.get(`#${randRadio}`).check({force: true})
    cy.get('#userNumber').type(randPhone)
    cy.get('#dateOfBirthInput').type('{selectAll}').type('19 Dec 1990').type('{enter}')
    cy.get('#subjectsInput').click().type(randLetter + '{enter}')
    cy.get(`#${randCheckbox}`).check({force: true})
    cy.get('#currentAddress').type(`${randName}, ${randRadio}, ${randCheckbox}`, {force: true})
    cy.get('#state').click().type(randLetter+ '{enter}')
    cy.get('#city').click().type(randLetter + '{enter}')
    /*.Click on [Submit] button.*/
    cy.get('#submit').click({force: true})
    /*Assert inputed data in modal window.*/
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form')
    cy.get('.modal-body').should('include.text', randName)
    cy.get('.modal-body').should('include.text', `${randName}son`)
    cy.get('.modal-body').should('include.text', `${randName}@mail.com`)
    cy.get('.modal-body').should('include.text', randPhone)
    cy.get('.modal-body').should('include.text', 'Gender')
    cy.get('.modal-body').should('include.text', '19 December,1990')
    cy.get('.modal-body').should('include.text', 'Subjects')
    cy.get('.modal-body').should('include.text', 'Hobbies')
  });
});
