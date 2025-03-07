/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should have inputed data in modal window after submit', () => {
    cy.get(`input[id=firstName]`).type('Kamil');

    cy.get(`input[id=lastName]`).type('Suchy');

    cy.get(`input[id=userEmail]`).type('kamil@gmail.com');

    cy.get(`input[value=Male]`).check({ force: true });

    cy.get(`input[id=userNumber]`).type('9991115684');

    cy.get(`input[id=dateOfBirthInput]`).type('{selectall}2001-03-19{enter}');

    cy.get(`div[id=subjectsContainer]`).type('Maths{enter}');

    cy.get(`input[id=hobbies-checkbox-1]`).check({ force: true });

    cy.get(`textarea[id=currentAddress]`).type('Nowogrodzka 12/15');

    cy.get(`div[id=state]`).type('NCR{enter}');

    cy.get(`div[id=city]`).type('Delhi{enter}');

    cy.get(`button[type='submit']`).click();

    cy.get('table tr')
      .contains('td', 'Student Name')
      .parent()
      .find('td')
      .eq(1)
      .should('have.text', 'Kamil Suchy');

    cy.get('table tr')
      .contains('td', 'Student Email')
      .parent()
      .find('td')
      .eq(1)
      .should('have.text', 'kamil@gmail.com');

    cy.get('table tr')
      .contains('td', 'Gender')
      .parent()
      .find('td')
      .eq(1)
      .should('have.text', 'Male');

    cy.get('table tr')
      .contains('td', 'Mobile')
      .parent()
      .find('td')
      .eq(1)
      .should('have.text', '9991115684');

    cy.get('table tr')
      .contains('td', 'Date of Birth')
      .parent()
      .find('td')
      .eq(1)
      .should('have.text', '19 March,2001');

    cy.get('table tr')
      .contains('td', 'Subjects')
      .parent()
      .find('td')
      .eq(1)
      .should('have.text', 'Maths');

    cy.get('table tr')
      .contains('td', 'Hobbies')
      .parent()
      .find('td')
      .eq(1)
      .should('have.text', 'Sports');

    cy.get('table tr')
      .contains('td', 'Address')
      .parent()
      .find('td')
      .eq(1)
      .should('have.text', 'Nowogrodzka 12/15');

    cy.get('table tr')
      .contains('td', 'State and City')
      .parent()
      .find('td')
      .eq(1)
      .should('have.text', 'NCR Delhi');
  });
});
