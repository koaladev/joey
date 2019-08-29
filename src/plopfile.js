module.exports = plop => {
  plop.setGenerator('Package', require('./generators/package.js'));
  plop.setHelper('cwd', require('./helpers/cwd.js'));
  plop.setHelper('year', require('./helpers/year.js'));
  plop.setWelcomeMessage('Choose a generator');
};
