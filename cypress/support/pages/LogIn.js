 class LogIn {
    getFirstName(){

        return cy.get('#firstName')
    }

    getLastName() {

        return cy.get('#lastName')
    }

    getEmail() {

        return cy.get('#userEmail')
    }

    getGender() {

        return cy.get('#gender-radio-1')
    }

    getPhoneNumber() {

        return cy.get('#userNumber')
    }

    getDateOfBirthInput() {

        return cy.get('#dateOfBirthInput')
    }

    getDatePicker() {

        return cy.get('.react-datepicker')
    }

    getSubjectsInput() {

        return cy.get('#subjectsInput')
    }

    getFirstHobby() {

        return cy.get('#hobbies-checkbox-1')
    }
    
    
    getCurrentAddress() {

        return cy.get('textarea[placeholder = "Current Address"]')    
    }

    getState() {

       return cy.get('#react-select-3-input')
    }

    getCity() {

        return cy.get('#react-select-4-input')
    }
    
}

export default LogIn;
