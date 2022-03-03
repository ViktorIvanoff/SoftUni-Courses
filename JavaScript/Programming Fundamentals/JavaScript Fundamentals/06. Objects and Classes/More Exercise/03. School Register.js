function getGradesInfo(arr = []) {

    let schoolRegister = {};
  
    let regex = new RegExp('(?:Student name: )(?<student>[A-Za-z]+)(?:, Grade: )(?<grade>\\d{1,2})(?:, Graduated with an average score: )(?<annualGrade>[1-6].\\d{1,2})');

    while (arr.length !== 0) {

      let [, student, grade, annualGrade] = regex.exec(arr.shift());
      
      grade = Number(grade);
      annualGrade = Number(annualGrade);
  
      if ((grade > 0 && grade < 12) && annualGrade >= 3.00 ) {

        grade++;
  
        if (!schoolRegister.hasOwnProperty(grade)) {
          schoolRegister[grade] = {};
          schoolRegister[grade].students = [student];
          schoolRegister[grade].avgAnnualGrade = annualGrade;
        } else {
          schoolRegister[grade].students.push(student);
          schoolRegister[grade].avgAnnualGrade += annualGrade;
        }
      }
    }
  
    for (let [key, value] of Object.entries(schoolRegister)) {

      value.avgAnnualGrade /= value.students.length;
      console.log(`${key} Grade`);
      console.log(`List of students: ${value.students.join(', ')}`);
      console.log(`Average annual grade from last year: ${value.avgAnnualGrade.toFixed(2)}`);
      console.log();
      
    }
  }
  