// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager class extends employee
// name - id - email - officeNumber - role
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); //This calls the parent constructor in this case that would be the employee class
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
