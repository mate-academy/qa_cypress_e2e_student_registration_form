const range = (start, stop, step = 1) => {
  if (stop <= start) {
    throw new Error('Last index cannot be smaller than first index');
  }

  if (start <= 0 || stop <= 0) {
    throw new Error('Start index and stop index cannot be smaller than zero');
  }

  if (step < 1) {
    throw new Error('Step cannot be smaller than 1');
  }
  return Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );
};

module.exports = { range };
