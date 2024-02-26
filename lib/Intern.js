// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Intern
// name - id - email -  school - role
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); //This calls the parent constructor in this case that would be the employee class
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
