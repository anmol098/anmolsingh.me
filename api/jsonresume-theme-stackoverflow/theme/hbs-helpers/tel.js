// Builds a dialable tel: value from a display number, e.g. "(+91)-93898 57956" -> "+919389857956".
const tel = (number) => String(number || '').replace(/[^\d+]/g, '');

module.exports = { tel };
