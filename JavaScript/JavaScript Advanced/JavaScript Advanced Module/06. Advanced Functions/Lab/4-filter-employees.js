function solve(input, criteria) {
//   Write a program that filters the employees of your company. You should print the result in a specific format. You will receive 2 parameters (data, criteria). You should parse the input, find all employees that fulfill the criteria, and print them.

//   You will receive a JSON string with all the employees, and criteria by which you should sort the employees. If the criteria are "all" print all the employees in the given format.

let employees = JSON.parse(input);
let [key, value] = criteria.split('-');

employees
.filter(x => x[key] == value)
.map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
.forEach(employee => console.log(employee));

// 0. Ardine Bassam - abassam0@cnn.com
// 1. Kizzee Jost - kjost1@forbes.com
}

// solve(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'gender-Female'
// );

solve(`[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`,
'last_name-Johnson');
