/// <reference types='cypress' />
import {
    faker
} from '@faker-js/faker';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const number = Math.random().toString().slice(2);
const street = faker.address.streetName();
const Addresstreet = faker.address.streetAddress();

describe('Student Registration page', () => {
    before(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.viewport(550, 750)
    });

    it('', () => {
        cy.get('[id="firstName"]')
            .type(firstName)
        cy.get('[id="lastName"]')
            .type(lastName)
        cy.get('[id="userEmail"]')
            .type(`${firstName}.${lastName}@gmail.com`)
        cy.get('[id="gender-radio-2"]').click({
            force: true
        })
        cy.get('[id="userNumber"]')
            .type(number)
        cy.get('[id="dateOfBirthInput"]')
            .click()
            .type('{selectAll}')
            .type('24 Feb 2022')
            .type('{enter}');
        cy.get('[id="subjectsContainer"]')
            .type('Biology')
        cy.get('[id="react-select-2-option-0"]').click()
        cy.get('[id="hobbies-checkbox-2"]').click({
            force: true
        })

        cy.get('[id="currentAddress"]')
            .type(`${street}.${Addresstreet}`)

        cy.get('[id="state"]').click()

        cy.get('[id="react-select-3-option-2"]').click()

        cy.get('[id="react-select-4-input"]').click({
            force: true
        })

        cy.get('[id="react-select-4-option-1"]').click({
            force: true
        })
        cy.get('[id="submit"]')
            .click()
            .click({ force: true })

        cy.get('[id="example-modal-sizes-title-lg"]').should('contain', 'Thanks for submitting the form')
    });
});
