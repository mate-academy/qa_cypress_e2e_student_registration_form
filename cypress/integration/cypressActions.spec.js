/// <reference types='cypress' />

describe('Submit form', () => {
  beforeEach(() => {
    cy.visit('/automation-practice-form')
  });

  it('should allow to register', () => {
    cy.get('#firstName')
      .type('Meredith')
      .should('contain.value', 'Meredith')

    cy.get('#lastName')
      .type('Wagner')
      .should('contain.value', 'Wagner')

    cy.get('#userEmail')
      .type('nerop@mailinator.com')
      .should('contain.value', 'nerop@mailinator.com')

    cy.get(`.custom-radio`)
      .contains('Female')
      .click()

    cy.get('#userNumber')
      .type('1234567890')
      .should('contain.value', '1234567890')

    cy.get('#dateOfBirthInput')
      .click({force: true})

    cy.get('.react-datepicker__month-select')
      .get('[value="4"]').should('contain.text', 'May')
      .click({force: true})

    cy.get('.react-datepicker__year-select')
      .select('1994')
      .should('have.value', '1994')

    cy.get('.react-datepicker__day')
      .contains('31').click()

    cy.get('#dateOfBirthInput')
      .should('contain.value', '31 May 1994')

    cy.get('#subjectsContainer #subjectsInput')
      .type('Acc', {delay: 300, force: true})
    cy.contains('.subjects-auto-complete__option', 'Accounting')
      .click({force: true})

    cy.get('.custom-checkbox')
      .contains('Music').click()
    cy.get('.custom-checkbox')
      .contains('Reading').click()

    cy.get('#currentAddress')
      .type('Ukraine, Kyiv')
      .should('contain.value', 'Ukraine, Kyiv')

    cy.get('.css-1wa3eu0-placeholder')
      .contains('Select State').click({force: true})
      .get('.css-11unzgr')
      .contains('Haryana').click({force: true})

    cy.get('.css-1wa3eu0-placeholder')
      .contains('Select City').click({force: true})
      .get('.css-11unzgr')
      .contains('Karnal').click({force: true})

    cy.get('#submit').click({force: true})

// Validating inputed data in modal window.

    cy.get('.table-responsive')
      .should('contain.text', 'Meredith Wagner')
      .and('contain.text', 'nerop@mailinator.com')
      .and('contain.text', '31 May,1994')
      .and('contain.text', 'Female')
      .and('contain.text', '1234567890')
      .and('contain.text', 'Accounting')
      .and('contain.text', 'Music, Reading')
      .and('contain.text', 'Ukraine, Kyiv')
      .and('contain.text', 'Haryana Karnal')
  });
});
