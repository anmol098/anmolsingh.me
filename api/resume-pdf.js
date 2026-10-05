const { renderResume } = require('./_renderResume');

// Set CHROME_PATH to use a locally installed Chrome (e.g. when testing outside Vercel).
const launchBrowser = async () => {
  // Both packages are ESM-first, so load them with dynamic import.
  const chromium = (await import('@sparticuz/chromium')).default;
  const puppeteer = (await import('puppeteer-core')).default;
  return puppeteer.launch({
    args: await puppeteer.defaultArgs({ args: chromium.args, headless: 'shell' }),
    executablePath: process.env.CHROME_PATH || (await chromium.executablePath()),
    headless: 'shell',
  });
};

export default async (req, res) => {
  let browser;
  try {
    const html = await renderResume();
    browser = await launchBrowser();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('print');
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="anmol-resume.pdf"');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).send(Buffer.from(pdf));
  } catch (error) {
    console.error('resume-pdf failed:', error);
    res.status(500).send('Unable to generate resume PDF');
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
