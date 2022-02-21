function solve(input) {
    
    let students = Number(input[0]);
    let totalGrades = 0;

    let topGrades = 0;
    let betweenFourAndFiveGrades = 0;
    let betweenThreeAndFourGrades = 0;
    let failGrades = 0;

    let topGradesPercent = 0;
    let betweenFourAndFiveGradesPercent = 0;
    let betweenThreeAndFourGradesPercent = 0;
    let failGradesPercent = 0;

    let averageGrade = 0;

    for (let i = 1; i <= students; i++) {

        totalGrades += Number(input[i]);

        let currentGrade = Number(input[i]);

        if (currentGrade >= 2.00 && currentGrade <= 2.99) {

            failGrades++;

        } else if (currentGrade >= 3.00 && currentGrade <= 3.99) {

            betweenThreeAndFourGrades++;

        } else if (currentGrade >= 4.00 && currentGrade <= 4.99) {

            betweenFourAndFiveGrades++;

        } else if (currentGrade >= 5.00) {

            topGrades++;

        }
    }

    topGradesPercent = (topGrades / students) * 100;
    betweenFourAndFiveGradesPercent = (betweenFourAndFiveGrades / students) * 100;
    betweenThreeAndFourGradesPercent = (betweenThreeAndFourGrades / students) * 100;
    failGradesPercent = (failGrades / students) * 100;

    averageGrade = totalGrades / students;

    console.log(`Top students: ${topGradesPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${betweenFourAndFiveGradesPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${betweenThreeAndFourGradesPercent.toFixed(2)}%`);
    console.log(`Fail: ${failGradesPercent.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);

}
