const Handlebars = require('handlebars');
const { readFileSync, readdirSync } = require('fs');
const { join } = require('path');

const HELPERS = join(__dirname, 'theme/hbs-helpers');
const { birthDate } = require(join(HELPERS, 'birth-date.js'));
const { dateHelpers } = require(join(HELPERS, 'date-helpers.js'));
const { paragraphSplit } = require(join(HELPERS, 'paragraph-split.js'));
const { toLowerCase } = require(join(HELPERS, 'to-lower-case.js'));
const { spaceToDash } = require(join(HELPERS, 'space-to-dash.js'));

const { MY, Y, DMY } = dateHelpers;

Handlebars.registerHelper('birthDate', birthDate);
Handlebars.registerHelper('paragraphSplit', paragraphSplit);
Handlebars.registerHelper('spaceToDash', spaceToDash);
Handlebars.registerHelper('toLowerCase', toLowerCase);
Handlebars.registerHelper('MY', MY);
Handlebars.registerHelper('Y', Y);
Handlebars.registerHelper('DMY', DMY);

function render(resume) {
  const css = readFileSync(`${__dirname}/style.css`, 'utf-8');
  const tpl = readFileSync(`${__dirname}/resume.hbs`, 'utf-8');
  const partialsDir = join(__dirname, 'theme/partials');
  const filenames = readdirSync(partialsDir);

  filenames.forEach((filename) => {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
      return;
    }
    const name = matches[1];
    const filepath = join(partialsDir, filename);
    const template = readFileSync(filepath, 'utf8');
    Handlebars.registerPartial(name, template);
  });
  return Handlebars.compile(tpl)({
    css,
    resume,
  });
}

module.exports = { render };
