const { faker } = require("@faker-js/faker");

function generateUser() {
	const randomNumber = Math.floor(Math.random() * 10 ** 11);
	const firstName = faker.person.firstName();
	const lastName = faker.person.lastName();
	const email = `${firstName}.${lastName}@email.com`.replace(/'/g, "");
	const mobile = randomNumber;
	const subjects = "Example subjects";
	const address = "Current address";

	return { firstName, lastName, email, mobile, subjects, address };
}
module.exports = { generateUser };
