function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 5);
  const firstName = `Artem_${randomNumber}`;
  const lastName = `Melnyk_${randomNumber}`;
  const email = `${firstName}@mail.com`;
  const mobile = Math.random().toString().slice(2);

  return { firstName, lastName, email, mobile }
}

module.exports = { generateUser };
