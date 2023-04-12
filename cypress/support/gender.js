function randomGender() {
    let randomIndex = Math.floor(Math.random() *2)
    let genders = ['Male', 'Female', 'Other']

    return genders[randomIndex]
}

module.exports = { randomGender };