/// <reference types='cypress' />

describe('Student Registration page', function () {
  before(function () {
    cy.fixture('user').then(function(user) {
      this.user = user;
    });

    cy.visit('/');
  });

  it('should allow to send a form with valid data', function () {
    cy.findByPlaceholder('First Name').type(this.user.firstName);
    cy.findByPlaceholder('Last Name').type(this.user.lastName);
    cy.findByPlaceholder('name@example.com').type(this.user.email);
    cy.findByPlaceholder('Mobile Number').type(this.user.number);
    cy.findByPlaceholder('Current Address').type(this.user.adress);

    cy.findByName('gender').check('Female', { force: true });

    cy.get('#dateOfBirthInput').click()
      .get('.react-datepicker__month-select').select('December')
      .get('.react-datepicker__year-select').select('2000')
      .get('.react-datepicker__day--022').click();
    cy.get('.subjects-auto-complete__value-container').type(`a{enter}a{enter}a{enter}`);
    cy.get('#state').type('n{enter}');
    cy.get('#city').type('d{enter}')

    cy.findByType('checkbox').check('1', { force: true });
    cy.findByType('checkbox').check('2', { force: true });

    cy.focused().type('{enter}');

    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    cy.get('.modal-body')
       .should('contain', `${this.user.firstName} ${this.user.lastName}`)
       .should('contain', this.user.lastName)
       .should('contain', 'Female')
       .should('contain', this.user.number)
       .should('contain', '22 December,2000')
       .should('contain', `${this.user.subjects[0]}, ${this.user.subjects[1]}, ${this.user.subjects[2]}`)
       .should('contain', 'Sports, Reading')
       .should('contain', this.user.adress)
       .should('contain', `${this.user.state} ${this.user.city}`)
 })
});
