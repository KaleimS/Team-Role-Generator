const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = []; //empty array for prompts to be pushed into

// Manager class
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name",
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please enter your employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter your Office number",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      roleSelect();
    });
};

// Role select
const roleSelect = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select a role that you would like to add",
        choices: [
          "add an engineer",
          "add an intern",
          "finish building the team",
        ],
      },
    ])
    .then((roleChoice) => {
      switch (roleChoice.menu) {
        case "add an engineer":
          addEngineer();
          break;
        case "add an intern":
          addIntern();
          break;
        default:
          generateTeam();
      }
    });
};

// Engineer Class
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the engineer name",
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please enter your employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "Please enter your Github username",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.githubUsername
      );
      teamMembers.push(engineer);
      roleSelect();
    });
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the intern name",
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please enter your employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the name of your school",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      roleSelect();
    });
};

const generateTeam = () => {
  const teamHTML = render(teamMembers);
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  
  fs.writeFileSync(outputPath, teamHTML);

  console.log(`Team HTML has been generated and saved to ${outputPath}`);
};
addManager();
