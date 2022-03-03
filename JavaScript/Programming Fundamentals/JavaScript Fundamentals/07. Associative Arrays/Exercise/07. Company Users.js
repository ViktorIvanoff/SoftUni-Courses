function solve(arr = []) {

    let companies = {};
    
    while (arr.length !== 0) {

      let [company, employeeId] = arr.shift().split(' -> ');
      if (!companies.hasOwnProperty(company)) {
        companies[company] = new Set();
      }
      companies[company].add(employeeId);
    }
    
    companies = Object.entries(companies).sort().reduce((prev, current) => { prev[current[0]] = current[1]; return prev; }, {});

    // companies = Object.fromEntries(Object.entries(companies).sort()); //2nd WAY
  
    for (let [company, employeeIds] of Object.entries(companies)) {

      console.log(company);
      
      employeeIds.forEach(employeeId => console.log(`-- ${employeeId}`));
    }
  }
  