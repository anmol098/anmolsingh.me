'use strict';

const replace = require('replace-in-file');
var moment = require('moment'); // require
var d = moment().format('DD-MMM-YYYY');

const options = {
  files: './src/config.js',
  from: /[0-9]{2}-[A-Za-z]{3}-[0-9]{4}/g,
  to: `${d}`,
};
try {
  const results = replace.sync(options);
  console.log('Replacement results:', results);
  process.exit(0);
} catch (error) {
  console.error('Error occurred:', error);
  process.exit(1);
}
