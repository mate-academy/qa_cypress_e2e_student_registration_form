/// <reference types='cypress' />

const student = {
  name: 'Ernesto',
  lastname: 'Che',
  email: 'cheguevara@mail.com',
  sex: 'Male',
  tel: '0990009900',
  bday: '14 June',
  byear: '1928',
  subject1: 'Maths',
  subject2: 'Physics',
  hobby1: 'Sports',
  hobby2: 'Reading',
  hobby3: 'Music',
  address: 'La Higuera, Santa Cruz, Bolivia',
  state: 'Rajasthan',
  city: 'Jaiselmer'
}

describe('DemoQA:', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('1. Registration', () => {
    cy.get('#firstName').type(student.name)
    cy.get('#lastName').type(student.lastname)
    cy.get('#userEmail').type(student.email)
    cy.contains(student.sex).click()
    cy.get('#userNumber').type(student.tel)
    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type(`${student.bday} ${student.byear} {enter}`)
    cy.get('#subjectsInput')
      .type(student.subject1 + '{enter}')
      .type(student.subject2 + '{enter}')
    cy.contains(student.hobby1).click()
    cy.contains(student.hobby2).click()
    cy.contains(student.hobby3).click()
    cy.get('#currentAddress').type(student.address)
    cy.contains('Select State').click({force: true})
    cy.contains(student.state).click({force: true})
    cy.contains('Select City').click({force: true})
    cy.contains(student.city).click({force: true})
    cy.get('#submit').click({force: true})
  });

  it('2. Confirmation', () => {
    cy.contains('Student Name').next()
      .should('contain', `${student.name} ${student.lastname}`)
    cy.contains('Student Email').next()
      .should('contain', student.email)
    cy.contains('td', 'Gender').next()
      .should('contain', student.sex)
    cy.contains('td', 'Mobile').next()
      .should('contain', student.tel)
    cy.contains('td', 'Date of Birth').next()
      .should('contain.text', `${student.bday},${student.byear}`)
    cy.contains('td', 'Subjects').next()
      .should('contain', `${student.subject1}, ${student.subject2}`)
    cy.contains('td', 'Hobbies').next()
      .should('contain', `${student.hobby1}, ${student.hobby2}, ${student.hobby3}`)
    cy.contains('td', 'Picture').next()
      .should('be.empty')
    cy.contains('td', 'Address').next()
      .should('contain', student.address)
    cy.contains('td', 'State and City').next()
      .should('contain', `${student.state} ${student.city}`)
  });
});
