// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = (answers) => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is you project called? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a name for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief project description (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a short description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your appliaction?(Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter brief instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application? (Required)',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please enter a brief rundown on how to use your app!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who has contributed to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter at least one entry!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'How do your tests work?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of the following lincense are you using?',
        choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: gitName => {
            if (gitName) {
                return true;
            } else {
                console.log('Please enter you GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }

    ])

};

// TODO: Create a function to write README file
function writeToFile(fileContent) {
    return new Promise((resolve, rejects) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                rejects(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })

}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then(markdown => {
            return writeToFile(markdown)
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse)
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();

