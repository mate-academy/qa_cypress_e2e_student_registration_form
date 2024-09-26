const faker = require('faker');

function generateUser() {
    
    const fullName = faker.name.findName();
    const email = faker.internet.email();
    const mobileNumber = faker.phone.phoneNumber('0#########');
    const adress = 'Latitude: ' + faker.address.latitude()
        + ' Longitude: ' +  faker.address.longitude();

  return { fullName, email, mobileNumber, adress };
}

module.exports = { generateUser };