function formatValue(data) {
  if (data instanceof Date) {
    const day = data.getDate();
    const year = data.getFullYear();
    const month = data.toLocaleString('en-US', { month: 'long' });

    return `${day} ${month},${year}`;
  }

  if (Array.isArray(data)) {
    return data.join(', ');
  }

  return data;
}

module.exports = {
  formatValue
};
