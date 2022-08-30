/// <reference types='cypress' />
import { faker } from '@faker-js/faker';
const firstname = faker.name.firstName();
const lastname = faker.name.lastName();
const email =faker.internet.email();
const mobile= faker.phone.phoneNumber('##########');
const date= faker.phone.phoneNumber('0#.0#.19##');  //тут небольшая дискриминация,но по другому не выходило
const street=faker.address.street();
const number=faker.phone.phoneNumber('###');
const country=faker.address.country();


const cypressConfig = require("../../cypress.config");

beforeEach(() => {
  cy.visit(`/automation-practice-form`)
});

describe('Practice form', () => {

  it('should log in user ', () => {
    cy.visit(`https://demoqa.com/automation-practice-form`)

    cy.get(`[placeholder="First Name"]`)
      .type(firstname)

    cy.get(`[placeholder="Last Name"]`)
      .type(lastname)

    cy.get(`#userEmail`)
      .type(email)

    cy.get('#genterWrapper > .col-md-9 > :nth-child(3)')
      .click();

    cy.get(`[placeholder="Mobile Number"]`)
      .type(mobile)

    cy.get('#dateOfBirthInput')
      .type('{selectall}')
      .type(date)

    cy.get('.subjects-auto-complete__value-container')
      .click('right')
      .type('Arts{enter}')

    cy.get('[id="hobbies-checkbox-3"]')
      .click({force: true})
      
    cy.get('[placeholder="Current Address"]')
      .click('right')  
      .type(street+', '+number+', '+country)

    cy.contains('[class=" css-1wa3eu0-placeholder"]','Select State')
      .click()
      .type('NCR{Enter}')

    cy.contains('[class=" css-1wa3eu0-placeholder"]','Select City')
      .click()
      .type('Delhi{enter}')

    cy.contains('[class="btn btn-primary"]','Submit')  
      .click()

    cy.contains('tr','Student Name')
      .should('contains.text', firstname+" "+lastname)

    cy.contains('tr','Student Email')
      .should('contains.text', email)

    cy.contains('tr','Gender')
      .should('contains.text', 'Other')

    cy.contains('tr','Mobile')
      .should('contains.text', mobile)

    cy.contains('tr','Date of Birth')
      .should('not.be.empty')

    cy.contains('tr','Subjects')
      .should('contains.text', 'Arts')

    cy.contains('tr','Hobbies')
      .should('contains.text', 'Music')

    cy.contains('tr','Address')
      .should('contains.text', street+', '+number+', '+country)

    cy.contains('tr','State and City')
      .should('contains.text', 'NCR Delhi')

       
  });
});
