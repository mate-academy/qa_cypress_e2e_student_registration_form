const format = require('date-fns/format');

function getDateInAppFormat(date) {
  const receivedDate = new Date(date);

  return format(receivedDate, 'd MMMM,yyyy');
}

module.exports = {
  getDateInAppFormat
};
