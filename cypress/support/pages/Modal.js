class Modal {
    getBody() {

        return cy.get('.modal-body');
    }

    getTableRows() {

        return cy.get('tbody tr');
    }
}

export default Modal;
