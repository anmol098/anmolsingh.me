const { renderResume } = require('./_renderResume');

export default async (req, res) => {
  try {
    const html = await renderResume();
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send('Unable to render resume');
  }
};
