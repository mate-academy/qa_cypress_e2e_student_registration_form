/// <reference types='cypress' />

const { generateUser } = require("../support/generate");
describe("Student Registration page", () => {
	before(() => {
		cy.visit("https://demoqa.com/automation-practice-form");
	});

	it("should submit the Student Registration form succesfully", () => {
		cy.get("#genterWrapper")
			.find(".custom-control-label")
			.each((gender) => {
				const { firstName, lastName, email, mobile, subjects, address } =
					generateUser();

				cy.get("#firstName").type(firstName);
				cy.get("#lastName").type(lastName);
				cy.get("#userEmail").type(email);
				cy.wrap(gender).click();
				cy.get("#userNumber").type(mobile);
				cy.get(".subjects-auto-complete__value-container").type(subjects);
				cy.get("#hobbiesWrapper")
					.find(".custom-control-label")
					.click({ multiple: true });
				cy.get("#currentAddress").type(address);
				cy.get("#state").click({ force: true });
				cy.get("#city").click({ force: true });

				cy.get("#submit")
					.click({ force: true })
					.then(() => {
						cy.get(".modal-content").should("be.visible");

						cy.get("#closeLargeModal").click({ force: true });
					});
			});
	});
});
