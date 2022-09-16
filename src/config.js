module.exports = {
  siteTitle: 'Anmol Pratap Singh | Software Engineer',
  siteDescription:
    'Anmol Singh is a software engineer based in Banglore, India who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Anmol Singh, Anmol, singh, anmol098, software engineer, back-end engineer, web developer, javascript, indian',
  siteUrl: 'https://anmolsingh.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-127188467-2',
  googleVerification: 'zWJzGMVk8J4FpXsLNpt7CB17SPaa2_ti9YfdGwnGr00',
  name: 'Anmol Pratap Singh',
  location: 'Banglore, India',
  email: 'hi@anmolsingh.me',
  github: 'https://github.com/anmol098',
  twitterHandle: '@misteranmol',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/anmol098',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/anmol098',
    },
    {
      name: 'Npm',
      url: 'npx anmol',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/misteranmol',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/misteranmol',
    },
  ],
  lastUpdated: '16-Sep-2022',

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
