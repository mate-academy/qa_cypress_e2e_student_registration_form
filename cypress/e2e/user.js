function newUser() {
    const firstName = 'Lina';
    const lastName = 'Malina';
    const email = 'lina@malina.com';
    const mobile = '0983346555';
    const address = 'Dormitory'

    return {firstName, lastName, email, mobile, address};
}

module.exports = { newUser };