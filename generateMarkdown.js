// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GNU':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'IBM':
      return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
    case 'Mozilla':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';  
    default:
      return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://opensource.org/licenses/MIT)';
    case 'GNU':
      return '![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'IBM':
      return '(https://opensource.org/licenses/IPL-1.0)';
    case 'Mozilla':
      return '(https://opensource.org/licenses/MPL-2.0)';
    default:
      return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){ 
 return
  `[license]${ license };`

}
   

// TODO: Create a function to generate markdown for README
const generateMarkdown =(answers) =>{
  return (
    `
    
  # ${answers.title}
  ----
  ## Table of Contents
  - [License](#license)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributing)
  - [Questions](#Questions)
  
  ## Description
    ${answers.description}
  ## License
    ${answers.license}
    ${renderLicenseLink}
  ## Installation
    ${answers.installation}
  ## Usage
    ${answers.usage}
  ## Contributions
    ${answers.contributing}
  ## Questions
  Git hub userName :
    ${answers.username}
  ----
    
  `);
}

module.exports = generateMarkdown;
