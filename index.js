
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the project title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please provide a description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application? (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please provide the installation!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application? (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please provide usage of application.');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose from the following licenses.',
        choices: ['MIT', 'IBM', 'Apache', 'GNU' ]        
      },
      {
        type: 'input',
        name: 'features',
        message: 'What are the features of your project? (Required)',
        validate: featuresInput => {
          if (featuresInput) {
            return true;
          } else {
            console.log('Please enter features!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to the project? (Required)',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please enter a contributor!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do you test your application? (Required)',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please enter your tests explanation!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },
    ]);
  };
  
// Create a function to initialize app
function init() {
  promptUser()
 .then(function(data){
   const readmeContent = generateMarkdown(data)
fs.writeFileSync('README.md', readmeContent)
 })
}
// Function call to initialize app
init();
