/// <reference types='cypress' />
import { dataForRegister } from "../support/dataForRegister";
import LogIn from "../support/pages/LogIn";
import Modal from "../support/pages/Modal";

describe('Student Registration page', () => {
  before(() => {
    cy.visit("/")
  });

  it('Can registraite with valid data', () => {
    const logIn = new LogIn();
    const modal = new Modal();

    logIn.getFirstName().type(dataForRegister.get('First Name'))
    logIn.getLastName().type(dataForRegister.get('Last Name'))
    logIn.getEmail().type(dataForRegister.get('Student Email'))
    logIn.getGender().should('have.value', 'Male').click({ force: true })
    logIn.getPhoneNumber().type(dataForRegister.get('Mobile'))
    logIn.getDateOfBirthInput().click()
    logIn.getDatePicker().as('datePicker')
      .should('be.visible')
      .find('.react-datepicker__year-select')
      .select(dataForRegister.get('Year of Birth'))
    cy.get('@datePicker')
      .find('.react-datepicker__month-select')
      .select(`${(+dataForRegister.get('Month of Birth') - 1).toString()}`)
    cy.get('@datePicker')
      .find(`.react-datepicker__day--0${dataForRegister.get('Day of Birth')}`)
      .first()
      .click()
    logIn.getSubjectsInput().type(dataForRegister.get('Subjects') + '{Enter}') 
    logIn.getFirstHobby().click({ force: true })
    logIn.getCurrentAddress().type(dataForRegister.get('Address'))
    logIn.getState().type(dataForRegister.get('State') + '{Enter}', { force: true }) 
    logIn.getCity().type(dataForRegister.get('City') + '{Enter}', { force: true })
    cy.get('form').submit();

    //Check if the modal window contains inputed data
    modal.getBody().should('exist').within(() => {
    modal.getTableRows().then(($tableRows) => {
        $tableRows.each((index, row) => {
          const columns = row.children;
          expect(dataForRegister.get(columns[0].innerText)).to.contain(columns[1].innerText)
        })
      })
    })
  });
});
