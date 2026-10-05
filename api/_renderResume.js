const Gisty = require('gisty');
const theme = require('./jsonresume-theme-stackoverflow/index');

const gist = new Gisty({ username: 'anmol098' });

const GIST_ID = '3432ddf496054448dc6aae82a9ca81a4';

// Fetches resume.json from the gist and renders it with the resume theme.
const renderResume = () =>
  new Promise((resolve, reject) => {
    gist.fetch(GIST_ID, (error, result) => {
      if (error) {
        return reject(new Error(error));
      }
      try {
        resolve(theme.render(JSON.parse(result.files['resume.json'].content)));
      } catch (e) {
        reject(e);
      }
    });
  });

module.exports = { renderResume };
