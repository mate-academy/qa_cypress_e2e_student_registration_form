/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture"
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

let user;

describe('Your third Test', () => {
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    // Registration
    it('Registration', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('[placeholder="First Name"]').type(user.username);
        cy.get('[placeholder="Last Name"]').type(user.username2);
        cy.get('#userEmail').type(user.email);
        cy.get('#gender-radio-1').click({force: true});
        cy.get('[placeholder="Mobile Number"]').type('0102030405');
        cy.get('#dateOfBirthInput').type('{selectAll}').type('10 June 2000{enter}');
        cy.get('#subjectsContainer').type('Ch{downArrow}{enter}');
        cy.get('#hobbies-checkbox-1', {timeout:2000}).click({force: true});
        cy.get('[placeholder="Current Address"]').type(user.address);
        cy.contains('.css-1hwfws3', 'Select State').click().type('Haryana{enter}');
        cy.get('#city').click().type('Karnal{enter}');
        cy.get('#submit').click();
        cy.contains('tbody tr', 'Student Name').should('contain', user.username + ' ' + user.username2);
        cy.contains('tbody tr', 'Student Email').should('contain', user.email);
        cy.contains('tbody tr', 'Gender').should('contain', 'Male');
        cy.contains('tbody tr', 'Mobile').should('contain', '0102030405');
        cy.contains('tbody tr', 'Date of Birth').should('contain', '10 June,2000');
        cy.contains('tbody tr', 'Subjects').should('contain', 'Chemistry');
        cy.contains('tbody tr', 'Hobbies').should('contain', 'Sport');
        cy.contains('tbody tr', 'Address').should('contain', user.address);
        cy.contains('tbody tr', 'State and City').should('contain', 'Haryana Karnal');
        cy.get('#closeLargeModal').click({force: true});
    })
})

// Advanced level:
// Check next test cases:
// 1. Pagination
// 2. Rows count selection
// 3. Add new worker
// 4. Delete worker
// 5. Delete all worker
// 6. Find worker in search field and edit it
// 7. Validate data in worker row after creating worker
// 8. Check search by all column values

// https://demoqa.com/webtables

// let user;

// describe('Advanced', () => {
//     before(function () {
//         cy.task("freshUser").then((object) => {
//             user = object;
//         });
//     });

// // create first user

//     it('Create users', () => {
//         cy.visit('https://demoqa.com/webtables');
//         cy.get('#addNewRecordButton').click();
//         cy.get('#firstName').type(user.username);
//         cy.get('#lastName').type(user.username2);
//         cy.get('#userEmail').type(user.email);
//         cy.get('#age').type('45');
//         cy.get('#salary').type('25000');
//         cy.get('#department').type('Insurance');
//         cy.get('#submit').click({delay: 1000});


//     // create second user
//         cy.get('#addNewRecordButton').click({delay: 1000});
//         cy.get('#firstName').type(user.username3);
//         cy.get('#lastName').type(user.username4);
//         cy.get('#userEmail').type(user.email2);
//         cy.get('#age').type('28');
//         cy.get('#salary').type('15000');
//         cy.get('#department').type('Compliance');
//         cy.get('#submit').click({delay: 1000});


//         // create third user
//         cy.get('#addNewRecordButton').click({delay: 1000});
//         cy.get('#firstName').type(user.username5);
//         cy.get('#lastName').type(user.username6);
//         cy.get('#userEmail').type(user.email3);
//         cy.get('#age').type('20');
//         cy.get('#salary').type('5000');
//         cy.get('#department').type('Legal');
//         cy.get('#submit').click({delay: 1000});


//         // Pagination
//         cy.get('[aria-label="rows per page"]').select('5');
//         cy.get('.-next').click();
//         cy.get('[aria-label="jump to page"]').should('have.value', '2');
//     })

//     //   Delete worker
//     it('Delete worker', () => {
//         cy.visit('https://demoqa.com/webtables');
//         cy.get('#addNewRecordButton').click();
//         cy.get('#firstName').type(user.username);
//         cy.get('#lastName').type(user.username2);
//         cy.get('#userEmail').type(user.email);
//         cy.get('#age').type('45');
//         cy.get('#salary').type('25000');
//         cy.get('#department').type('Insurance');
//         cy.get('#submit').click({delay: 1000});
//         cy.get('.rt-tbody').should('contain', user.username);
//         cy.get('#delete-record-4').click({force: true});
//         cy.get('.rt-tbody').should('have.not.value', user.username);
//     })

//     // Delete all workers
//     it('Delete all workers', () => {
//         cy.visit('https://demoqa.com/webtables');
//         cy.get('.rt-tbody').should('contain', 'Cierra').and('contain', 'Vega');
//         cy.get('.rt-tbody').should('contain', 'Alden').and('contain', 'Cantrell');
//         cy.get('.rt-tbody').should('contain', 'Kierra').and('contain', 'Gentry');

//         cy.get('#delete-record-1').click({force: true});
//         cy.get('#delete-record-2').click({force: true});
//         cy.get('#delete-record-3').click({force: true});

//         cy.get('.rt-tbody').should('have.not.value', 'Cierra').and('have.not.value', 'Vega');
//         cy.get('.rt-tbody').should('have.not.value', 'Alden').and('have.not.value', 'Cantrell');
//         cy.get('.rt-tbody').should('have.not.value', 'Kierra').and('have.not.value', 'Gentry');
//         })

//         // Searche
//     it('Find worker in the searche field and edit it', () => {
//         cy.visit('https://demoqa.com/webtables');
//         cy.get('.rt-tbody').should('contain', 'Cierra').and('contain', 'Vega');
//         cy.get('.rt-tbody').should('contain', 'Alden').and('contain', 'Cantrell');
//         cy.get('.rt-tbody').should('contain', 'Kierra').and('contain', 'Gentry');
//         cy.get('#searchBox').type('Alden');
//         cy.get('#edit-record-2').click();
//         cy.get('#submit').click();
//         cy.get('.rt-tbody').should('contain', 'Alden').and('contain', 'Cantrell');
//             })

//             // Validate Data
//     it('Validate all fields for created worker', () => {
//         cy.visit('https://demoqa.com/webtables');
//         cy.get('#addNewRecordButton').click();
//         cy.get('#firstName').type(user.username);
//         cy.get('#lastName').type(user.username2);
//         cy.get('#userEmail').type(user.email);
//         cy.get('#age').type('45');
//         cy.get('#salary').type('25000');
//         cy.get('#department').type('Insurance');
//         cy.get('#submit').click({delay: 1000});
//         cy.get('.rt-tbody').should('contain', user.username).and('contain', user.username2)
//             .and('contain', user.email).and('contain', '45').and('contain', '25000')
//             .and('contain', 'Insurance');
//     })

//     // Serche different column
//     it('The searche field', () => {
//         cy.visit('https://demoqa.com/webtables');
//         cy.get('.rt-tbody').should('contain', 'Cierra').and('contain', 'Vega');
//         cy.get('.rt-tbody').should('contain', 'Alden').and('contain', 'Cantrell');
//         cy.get('.rt-tbody').should('contain', 'Kierra').and('contain', 'Gentry');
//         cy.get('#searchBox').type('{selectAll}').type('Alden');
//         cy.get('.rt-tbody').should('contain', 'Alden');
//         cy.get('#searchBox').type('{selectAll}').type('Vega');
//         cy.get('.rt-tbody').should('contain', 'Vega');
//         cy.get('#searchBox').type('{selectAll}').type('29');
//         cy.get('.rt-tbody').should('contain', '29');
//         cy.get('#searchBox').type('{selectAll}').type('cierra@exam');
//         cy.get('.rt-tbody').should('contain', 'cierra@exam');
//         cy.get('#searchBox').type('{selectAll}').type('Legal');
//         cy.get('.rt-tbody').should('contain', 'Legal');

//     })
// })