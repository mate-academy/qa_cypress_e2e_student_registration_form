function  makeUser() {
  const randomNumber = Math.random().toString().slice(2, 5);
  const firstName = `Denis.${randomNumber}`;
  const lastName = `Suchachev.${randomNumber}`;
  const email = `${firstName}${lastName}@mail.com`;
  const forMobile = Math.random().toString().slice(2)
  const mobile = "093" + forMobile;
  const adress = `Yavornitskogo ${Math.floor(Math.random() * 90 + 10)}`

  return { firstName, lastName, email, mobile, adress }
}

module.exports = { makeUser };
