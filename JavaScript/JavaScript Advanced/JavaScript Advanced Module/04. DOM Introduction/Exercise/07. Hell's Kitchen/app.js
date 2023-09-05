function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
//  ["PizzaHut - Peter 500, George 300, Mark 800",
// "TheLake - Bob 1300, Joe 780, Jane 660"]
      let inputArr = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = ' ';
      let output = {};

      // 1. we loop the input and parse the input data
      for (let inputElement of inputArr) {

         let restaurantInfo = inputElement.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

      // we fill our object with the workers' data
         for (let worker of workersData) {

            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) {
               // we need to collect the restaurant data somewhere, so we create an object. If we dont have the restaurant, we create it with a propery empty object
               output[restaurantName] = {};

            } 
   // otherwise, if we already have the restaurant in our database, we fill it up with the worker and his salary parsed as a number, because later we will need to calc the average salary

            if(output.hasOwnProperty(restaurantName)) {

               output[restaurantName][name] = Number(salary);
            
            }
         }
      }

      let entries = Object.entries(output);
      // index 0 : "PizzaHut"  key - restaurantName : { 
      // index 1 : George : 300 // key - workerName , value - his salary
      // index 2 : Mark : 800  
      //                                    }

      // 3. we loop throuh the workers data as entries and calc total salary and average salary
      for (let entry of entries) {

         let key = entry[0];
         let values = Object.entries(entry[1]);
         // now we have the workers as an array of arrays. 
         // index 0: [George, 300] workerData[0][0] = George; workerData[0][1] = 300
         // index 1: [Mark, 800]

         // we calculate the total salary
         for (let [name, salary] of values) {
            totalSalary += salary;
         }

         // we calculate the average salary
         avgSalary = totalSalary / values.length;
         // and name the best restaurant

         if (avgSalary > currAvgSalary) {

            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }

      // we take all the workers from the best restaurant, because we need to sort them
      let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);

      let print = ' ';
      
      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p').
      textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

      document.querySelector('#workers p').textContent = print;

   }
}

//       You will be given an array of strings, which represents a list of all the restaurants with their workers.

//       When the [Send] button is clicked:
//       •	Display the best restaurant of all the added restaurants with its average salary and best salary. 
//       •	If there is a restaurant in the input array that is added more than once, you need to add new workers to the old ones and update the values of the average salary and the best salary.
//       •	The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.
//       •	Display all workers in the best restaurant with their salaries.
//       The best restaurant's workers should be sorted by their salaries in descending order.
      

// The input will be received from the given textarea in the form of an array of strings. Each string represents a restaurant with its workers: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]

// •	The output contains two strings
// o	The first one is the best restaurant in the format:
// `Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
// avgSalary and bestSalary must be formatted to the second decimal point.
// o	The second one is all the workers in that restaurant in the following format:
// `Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`




// Name: TheLake Average Salary: 913.33 Best Salary: 1300.00
// Name: Bob With Salary: 1300 Name: Joe With Salary: 780 Name: Jane With Salary: 660

// The added restaurants are: TheLake and PizzaHut. 
// TheLake has average salary:
// (1300+780+660)/3= 913.33,
// and PizzaHub has average salary: 
// (500+300+800)/2=533.33. 
// So the best restaurant is TheLake.








      
      
