module.exports = {
  description: 'Create a new package for Pouch Component Library',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Choose a package type',
      choices: ['Component'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter the package name',
      validate: answer => {
        if (!answer) {
          return 'Package name cannot be empty';
        }
        return true;
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
