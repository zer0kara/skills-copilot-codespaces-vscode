function skillsMember() {
  var skills = ["HTML", "CSS", "JS", "PHP"];
  var member = {
    name: "John",
    age: 30,
    skills: skills,
    salary: 2000,
    getSalary: function() {
      return this.salary;
    },
    getSkills: function() {
      return this.skills;
    }
  };
  return member;
}