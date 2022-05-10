const inquirer = require('inquirer');

const fs = require('fs');
const md = require('./generateMarkdown');
const fileName = "markdown.md"

const questions = [
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
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'GNU','IBM','Mozilla'],
        default: ['MIT'],
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
    },
    {
        type: 'input',
        message: 'Want to contribute?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What will this site be used for?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What type of installation?',
        name: 'installation',
    }
];



  
    // .then(answers => {
    //     console.log(answers.name);
    //     console.log(answers.license);

    //     const license = answers.license
    //     const dataFile =

    //         `
    //     #Title

    //     ${answers.title}
        
    //     ##License
        
    //     ${license}
        
    //     ##Username
       
    //     ${answers.username}
        
    //     ####Description
        
    //     ${answers.description}
       
    //     ###Email
       
    //     ${answers.email}
    //     `

    //     fs.writeFile('README.md', dataFile, (err) =>
    //         err ? console.error(err) : console.log("success!")
    //     );
    // }
    // );


function writeToFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, (err) => {
        err ? console.Console(err) : console.log('filewritten');

    });
}

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        const fileData = md(answers)
        writeToFile(fileName, fileData)
    });
}
init();

// function writeToFile(fileName, fileData) {
//     fs.writeFile(fileName, fileData, (err) => {
//         err ? console.Console(err) : console.log('filewritten');

//     });
// }

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