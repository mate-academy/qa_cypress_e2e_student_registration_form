function getStableKey(key) {
  const preps = ['Of', 'And'];
  return key.split(/(?=[A-Z])/).map((el) => preps.includes(el) ? el.toLowerCase() : el[0].toUpperCase() + el.slice(1)).join(' ');
}

module.exports = {
  getStableKey
};
