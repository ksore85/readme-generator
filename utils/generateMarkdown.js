// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
if(license === 'MIT') {
  badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}
else if (license === 'IBM') {
  badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
}
else if (license === 'Apache') {
  badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
}
else if (license === 'GNU') {
  badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}
return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
## Title 
  
  ${data.title}

## Description 

${data.description}


## Installation

${data.installation}

## Usage 

${data.usage}

## License
## Badges

${renderLicenseBadge(data.license)}

## Features

${data.features}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions
${data.github}
${data.email}
`;
}

module.exports = generateMarkdown;
