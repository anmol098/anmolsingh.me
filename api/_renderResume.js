const Gisty = require('gisty');
const theme = require('./jsonresume-theme-stackoverflow/index');

const gist = new Gisty({ username: 'anmol098' });

const GIST_ID = '3432ddf496054448dc6aae82a9ca81a4';

// The PDF is a short recruiter-facing version: only projects flagged `"featured": true`
// in resume.json, each trimmed to its first bullets. The web resume shows everything.
const PDF_PROJECT_BULLETS = 2;

const prepareForPdf = (resume) => {
  const projects = resume.projects || [];
  const featured = projects.filter((project) => project.featured === true);
  // If nothing is flagged yet, keep every project rather than dropping the section.
  const selected = featured.length ? featured : projects;
  return {
    ...resume,
    projects: selected.map((project) => ({
      ...project,
      highlights: (project.highlights || []).slice(0, PDF_PROJECT_BULLETS),
    })),
  };
};

// Fetches resume.json from the gist and renders it with the resume theme.
const renderResume = ({ pdf = false } = {}) =>
  new Promise((resolve, reject) => {
    gist.fetch(GIST_ID, (error, result) => {
      if (error) {
        return reject(new Error(error));
      }
      try {
        const resume = JSON.parse(result.files['resume.json'].content);
        resolve(theme.render(pdf ? prepareForPdf(resume) : resume));
      } catch (e) {
        reject(e);
      }
    });
  });

module.exports = { renderResume, prepareForPdf };
