const Employee = require("./Employee");

class Intern extends Employee {
  constructor (name, id, email, school){
    // constructor parent is being called
      super(name, id, email)
      this.school = school
  }
  getRole(){
    return 'Intern'
}
getSchool () {
    return this.school
}

}

module.exports = Intern;
