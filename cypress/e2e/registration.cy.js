/// <reference types='cypress' />

describe("Student Registration page", () => {
   before(() => {

   });
    beforeEach(() => {
       cy.visit('https://demoqa.com/automation-practice-form')
    });
    it('should be correct page', () => {
       cy.url().should('equal', 'https://demoqa.com/automation-practice-form');
       cy.get('h5').contains('Student Registration Form');
    });
    it('should have First Name field', () => {
       cy.findByPlaceholder('First Name').should('exist').should('have.attr', 'required');
    });
    it('should have Last Name field', () => {
       cy.findByPlaceholder('Last Name').should('exist').should('have.attr', 'required');
    });
    it('should have Email field', () => {
       cy.findByPlaceholder('name@example.com').should('exist');
    });
    it('should have Mobile Number field', () => {
       cy.findByPlaceholder('Mobile Number').should('exist').should('have.attr', 'required');
    });
    it('should have Subject field', () => {
       cy.get('.subjects-auto-complete__value-container').should('exist');
    });
    it('should have Current Address field', () => {
       cy.findByPlaceholder('Current Address').should('exist');
    });
    it('should have Date picker', () => {
       cy.get('#dateOfBirthInput').should('exist');
    });
    it('should have Male radio button', () => {
       cy.get('#gender-radio-1').should('exist').should('have.attr', 'required');
    });
    it('should have Female radio button', () => {
       cy.get('#gender-radio-2').should('exist').should('have.attr', 'required');
    });
    it('should have Other radio button', () => {
       cy.get('#gender-radio-3').should('exist').should('have.attr', 'required');
    });
    it('should have Sports checkbox', () => {
       cy.get('#hobbies-checkbox-1').should('exist');
    });
    it('should have Reading checkbox', () => {
       cy.get('#hobbies-checkbox-2').should('exist');
    });
    it('should have Music checkbox', () => {
       cy.get('#hobbies-checkbox-3').should('exist');
    });
    it('should have State dropdown', () => {
       cy.get('#state').should('exist');
    });
    it('should have City dropdown', () => {
       cy.get('#city').should('exist');
    });
 });
 
 describe('Successful registration', () => {
    beforeEach(() => {
       cy.visit('https://demoqa.com/automation-practice-form')
    });
    const { firstname, lastname, email, address, number } = generateData();
 
    it('Registration with valid data', () => {
       cy.findByPlaceholder('First Name').type(firstname);
       cy.findByPlaceholder('Last Name').type(lastname);
       cy.findByPlaceholder('name@example.com').type(email);
       cy.get('#gender-radio-1').check('Male', { force: true });
       cy.findByPlaceholder('Mobile Number').type(number);
       cy.get('#dateOfBirthInput').click()
          .get('.react-datepicker__navigation--previous').click()
          .get('.react-datepicker__month-select').select('November')
          .get('.react-datepicker__year-select').select('2001')
          .get('.react-datepicker__day--017').click();
       cy.get('.subjects-auto-complete__value-container').type('Math{enter}');
       cy.get('#hobbies-checkbox-1').check('1', { force: true });
       cy.findByPlaceholder('Current Address').type(address);
       cy.get('#state').click().type('Britain{enter}');
       cy.get('#city').click().type('London{enter}');
       cy.focused().type('{enter}')
 
 
   it('', () => {
 
   });
       cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
       cy.get('.modal-body')
          .should('contain', `${firstname} ${lastname}`)
          .should('contain', email)
          .should('contain', 'Male')
          .should('contain', number)
          .should('contain', '17 November,2002')
          .should('contain', 'Maths')
          .should('contain', 'Sports')
          .should('contain', address)
          .should('contain', 'Britain London')
    })
 });
