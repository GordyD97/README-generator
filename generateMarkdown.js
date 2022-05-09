// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GNU':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    default:
      return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) =>{
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://opensource.org/licenses/MIT)';
    case 'GNU':
      return '![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>{
  
}
   

// TODO: Create a function to generate markdown for README
const generateMarkdown =(answers) =>{
  return (
    `
  # ${answers.file}
  ----
  ## Table of Contents
  - [License](#license)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributing)
  - [Tests](#testing)
  
  ## Description
    ${answers.description}
  ## License
    ${answers.license}
  ## Installation
    ${answers.installation}
  ## Usage
    ${answers.usage}
  ## Contributions
    ${answers.contributing}
  ## Testing
    ${answers.tests}
  ## Questions
   [Testing file.]
  ----
    
  `);
}

module.exports = generateMarkdown;
