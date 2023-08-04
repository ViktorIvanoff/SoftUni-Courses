class Company {

 constructor() {
    this.departments = [];
    // [ { ... }, {.... }, {.... } ]
 }

  createDepartment(name) {

    const department = this.departments.find((x) => x.name === name);

    if(!department) {
      // if we dont have such dep, we create it
      let obj = {
        name: name,
        // [name], [salary], [position], [department] )
        salaries: [],
        positions: [],
        employees: []
      }
      // push obj into departments arr
      this.departments.push(obj);
      return obj;
    }
      return department;
  }

  // addEmployee( [name], [salary], [position], [department] )
    //         ("Stanimir", 2000, "engineer", "Construction");
  addEmployee(...args) {

      let [name, salary, position, departmentName] = args;
      salary = Number(salary);

    const isInvalidInput = args.some((x) => x === undefined || x === null || x === ' ') || salary < 0;
    if (isInvalidInput) {
      throw new Error('Invalid input!');
    }

    const department = this.createDepartment(departmentName);
    department.employees.push(name);
    department.salaries.push(salary);
    department.positions.push(position);

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  getSumOfSalaries(department) {
    // sum all salaries
    return department.salaries.reduce((acc, value) => acc + value, 0);
  }

  bestSalaryDepartment() {
    // this func sorts the salaries in descending
    return this.departments.sort( (a, b) => 
    this.getSumOfSalaries(b) / b.salaries.length -
    this.getSumOfSalaries(a) / a.salaries.length
)[0];
  }

  bestDepartment() {

    const best = this.bestSalaryDepartment();

    const combinedEmployees = best.employees.reduce( (a, v, i) => {
      a[i] = [];
      a[i].push(v, best.salaries[i], best.positions[i]);
      return a;
  }, []);

  const sorted = combinedEmployees.sort((a, b) => {
    return b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) :  b[1] - a[1];
});

const printData = sorted.map((x) => x.join(' ')).join('\n');

const avgSalary = (this.getSumOfSalaries(best) / best.salaries.length).toFixed(2);

return `Best Department is: ${best.name}
Average salary: ${avgSalary}
${printData}`;

}
  }

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect        "Stan", 2000, "architect", "Construction");
// Stanimir 2000 engineer     "Stanimir", 2000, "engineer", "Construction");
// Pesho 1500 electrical engineer  "Pesho", 1500, "electrical engineer", "Construction");
// Slavi 500 dyer                   "Slavi", 500, "dyer", "Construction");
