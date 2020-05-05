const ageInDays = (day, month, year) => {
  // TODO: Implement the method and return an integer
  const days = (new Date() - new Date(`${year}-${month}-${day} 00:00`)) / (1000 * 60 * 60 * 24);
  return Math.round(days);
};

module.exports = ageInDays; // Do not remove. We need this for the spec to know about your method.

console.log(ageInDays(29, 3, 1978));
