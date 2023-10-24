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
				cy.get(".css-yk16xz-control").eq(0).click({ force: true });
				cy.get("#city").click({ force: true });

				cy.get("#submit")
					.click({ force: true })
					.then(() => {
						cy.get(".modal-content").should("be.visible");
					});
				cy.get("tbody > :nth-child(1) > :nth-child(2)").should(
					"contain.text",
					`${firstName} ${lastName}`
				);
				cy.get("tbody > :nth-child(2) > :nth-child(2)").should(
					"contain.text",
					email
				);
				cy.get("tbody > :nth-child(3) > :nth-child(2)").should((element) => {
					const text = element.text();
					expect(text).to.be.oneOf(["Male", "Female", "Other"]);
				});

				cy.get("tbody > :nth-child(4) > :nth-child(2)").should(
					"contain.text",
					mobile
				);
				cy.get("tbody > :nth-child(6) > :nth-child(2)").should(
					"contain.text",
					subjects
				);
				cy.get("tbody > :nth-child(7) > :nth-child(2)").should(
					"contain.text",
					"Sports, Reading, Music"
				);
				cy.get("tbody > :nth-child(8) > :nth-child(2)").should(
					"contain.text",
					""
				);
				cy.get("tbody > :nth-child(9) > :nth-child(2)").should(
					"contain.text",
					address
				);
				cy.get("tbody > :nth-child(10) > :nth-child(2)").should(
					"contain.text",
					""
				);

				cy.get("#closeLargeModal").click({ force: true });
			});
	});
});
