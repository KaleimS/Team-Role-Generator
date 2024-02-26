// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// class - engineer
// name - id - email - github - role
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email); //This calls the parent constructor in this case that would be the employee class
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
