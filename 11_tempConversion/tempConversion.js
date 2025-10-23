const convertToCelsius = function(x) {
  const converted = (x - 32) * (5 / 9);
  const rounded = Math.round(converted * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(x) {
  const converted = x * (9 / 5) + 32;
  const rounded = Math.round(converted * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
