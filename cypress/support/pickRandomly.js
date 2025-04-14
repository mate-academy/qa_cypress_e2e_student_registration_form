const pickRandomly = (array) => {
  return array.filter(() => Math.random() > 0.5);
};

module.exports = pickRandomly;
