function generateUser() {
  const firstName = 'Jan';
  const lastName = 'Kowalski';
  const email = `${firstName}${lastName}@mail.com`;
  const mobileNumber = Math.random().toString().slice(2, 12);
  const currentAddress = 'Parzęczewo';
  return {
    firstName,
    lastName,
    email,
    mobileNumber,
    currentAddress
  };
}

module.exports = {
  generateUser
};
