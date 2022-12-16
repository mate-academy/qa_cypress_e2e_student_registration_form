function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const firstName = `Albus_${randomNumber}`;
  const lastName = `Dumbledore_${randomNumber}`;
  const email = `${firstName}@mail.com`;
  const mobile = Math.random().toString().slice(2);

  return { firstName, lastName, email, mobile }
}

module.exports = { generateUser };
