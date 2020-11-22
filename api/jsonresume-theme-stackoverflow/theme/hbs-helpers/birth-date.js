const moment = require('moment');
const { SafeString } = require('handlebars');

const birthDate = (birth) => {
  const out = [];
  if (birth && Object.keys(birth).length) {
    if (birth.place) {
      out.push(`<div> Born in ${birth.place}`);
    }
    if (birth.place && birth.state) {
      out.push(`, ${birth.state}`);
    }
    const year = birth.date ? moment(birth.date.toString(), ['YYYY-MM-DD']).format('YYYY') : '';
    if (year && birth.place && birth.state) {
      out.push(` in ${year}</div>`);
    } else if (year && (!birth.place || birth.state)) {
      out.push(`<div> Born in ${year}</div>`);
    }
  }

  return new SafeString(out.join(''));
};

module.exports = { birthDate };
