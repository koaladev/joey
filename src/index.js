#!/usr/bin/env node

const execa = require('execa');

(async () => {
  try {
    await execa(require.resolve('plop'), ['--cwd', __dirname], {
      stdio: 'inherit',
    });
  } catch (error) {
    console.log(error);
  }
})();
