function employess(input) {

    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }

        printInfo() {
            return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`;
        }
    }

    for(let line of input) {
        let name = line;
        let length = name.length;
       
        let employee = new Employee(name, length);
        console.log(employee.printInfo());
    }
// Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18
}
employess(['Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);