function init() {

}

const inquirer = require('inquirer');
const fs = require('fs');
console.log(inquirer);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of the application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a liscence & badge',
            choices: ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your preferred email?'
        }
    ])
    .then(answers => {
        console.log(answers.name);
        console.log(answers.license);

        const license = answers.license
        const dataFile =

        `
        #Title

        ${answers.title}
        
        ##License
        
        ${license}
        
        ##Username
       
        ${answers.username}
        
        ####Description
        
        ${answers.description}
       
        ###Email
       
        ${answers.email}
        `

        fs.writeFile('answers.md', dataFile, (err) =>
            err ? console.error(err) : console.log("success!")
        );
    }
    );

    init();
    
//     WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README