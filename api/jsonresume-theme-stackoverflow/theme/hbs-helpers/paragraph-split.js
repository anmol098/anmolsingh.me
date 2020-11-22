const { SafeString } = require('handlebars');

const paragraphSplit = (text) => {
  const expr = /\r\n|\r|\n/g;
  const lines = Array.isArray(text) ? text.join('').split(expr) : text.split(expr);
  const output = lines.filter(line => line).reduce((a, b) => `${a}<p>${b}</p>`, '');
  return new SafeString(output);
};

module.exports = { paragraphSplit };
