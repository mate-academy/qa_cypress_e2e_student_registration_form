function generateUser() {
    const randomNumber = Math.random().toString().slice(2, 6);
    const firstName = `Frodo_${randomNumber}`;
    const lastName = `Baggins_${randomNumber}`;
    const email = `${firstName}@mail.com`;
    const mobile = Math.random().toString().slice(2);
  
    return { firstName, lastName, email, mobile }
  }
  
  module.exports = { generateUser };
