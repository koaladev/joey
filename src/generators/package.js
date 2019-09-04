module.exports = {
  description: 'Create a new package for Pouch Component Library',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Choose a package type',
      choices: ['Component', 'Stylesheet'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter the package name',
      validate: answer => {
        if (/[\w]+/.test(answer)) {
          return true;
        }
        return false;
      },
    },
  ],
  actions: [
    {
      type: 'addMany',
      destination: '{{cwd}}/packages/pouch-{{dashCase type}}-{{dashCase name}}',
      base: 'templates/package/{{dashCase type}}',
      templateFiles: 'templates/package/{{dashCase type}}/**/*',
    },
  ],
};
