const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export function getRandomLetter() {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

module.exports = {
  alphabet,
  getRandomLetter
};
