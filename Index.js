const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/htmlTemp');
teamArray = []

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Manager's Name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter a name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager's ID?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must input your manager's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter your manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter your manager's office number.");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamData.push(manager);
    })
    .then(routing);
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter the engineer's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Engineer's employee id?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter the engineer's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Engineer's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter the engineer's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Engineer's GitHub username?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter the engineer's GitHub username.");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamData.push(engineer);
    })
    .then(routing);
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter the intern's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Intern's employee id?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter the intern's employee id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Intern's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter the intern's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's school name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter the intern's school name.");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamData.push(intern);
    })
    .then(routing);
};

// routing to engineer or intern
const routing = () => {
    return inquirer.prompt([
        {
            type: "rawlist",
            name: "role",
            message: "What is the next employee's role?:",
            choices: ["Engineer", "Intern", "All members are entered"]
        }
    ])
    .then(({ role }) => {
        switch (role) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case "All members are entered":
                writeToFile(generateHTML(teamData));
                break;
        }
    })
}

// function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/team.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

managerPrompt()