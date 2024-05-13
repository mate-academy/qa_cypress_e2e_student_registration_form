import { generateUser } from '../support/generate';

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  describe('User registration', () => {
    it('should allow user to register filling all fields with valid data', () => {
      const {firstName, lastName, email, mobile, subject, hobbies, gender, address, state, city} = generateUser();

      cy.get('input[placeholder*="First Name"]').as('firstNameInput').type(firstName);                
      cy.get('input[placeholder*="Last Name"]').as('lastNameInput').type(lastName);                
      cy.get('input[placeholder*="name@example.com"]').as('emailInput').type(email);                
      cy.get('.custom-control-label').contains(gender).click();                

      cy.get('input[placeholder*="Mobile Number"]').as('mobileInput').type(mobile);  

      cy.get('.subjects-auto-complete__value-container').type(subject + '{enter}');  

      cy.get('.custom-control-label').contains(hobbies).click(); 

      cy.get('#dateOfBirthInput').click();                
      cy.get('.react-datepicker__month-select').select('March');
      cy.get('.react-datepicker__year-select').select('1995');
      cy.get(':nth-child(5) > .react-datepicker__day--028').click();

      cy.get('#currentAddress').as('addressInput').type(address);

      cy.get('.css-1wa3eu0-placeholder').contains('Select State').as('stateDropdown').type(state + '{enter}');                        
      cy.get('.css-1wa3eu0-placeholder').contains('Select City').as('cityDropdown').type(city + '{enter}');
      
      cy.get('#submit').contains('Submit').should('exist').click();

      cy.get('.table-responsive').within(() => {
        cy.contains(`${firstName} ${lastName}`).should('exist');
        cy.contains(email).should('exist');
        cy.contains(gender).should('exist');
        cy.contains(mobile).should('exist');
        cy.contains('28 March,1995').should('exist');
        cy.contains(subject).should('exist');
        cy.contains(hobbies).should('exist');
        cy.contains(address).should('exist');
        cy.contains(`${state} ${city}`).should('exist');
      });
    });
  });
});
