function generateReport() {
//     When the "Generate Report" button is pressed:
//     •	You must generate a JSON report from the data inside the table, by only taking the columns, which are selected.
//     Each table header has a checkbox. If the checkbox is checked, then the data from this column must be included in the report. Unchecked columns must be omitted. 

//     For every row (excluding the header):
// •	Create an object with properties for each of its columns.
// •	The name of each property is the name attribute of the column’s header, and the value is the text content of the cell.
// •	Store the result in an array and output it as a JSON string display it inside the <textarea> with id "output". See the example for details.

// There will be input, your program must execute based on the page content. The output must be a JSON string, displayed in the <textarea> with id "output".

    let tableHeaders = Array.from(document.querySelectorAll('tr th'));
    // we turn into array the table headers (headings)
    let resultArr = [];
    let tableHeadersArray = [];
    let columnsArray = [];

    for (let i = 0; i < tableHeaders.length; i++) {
        // Each table header has a checkbox. If the checkbox is checked, then the data from this column must be included in the report. Unchecked columns must be omitted. 

        if (tableHeaders[i].querySelector('input').checked) {
            // we take the column data from the checked column and push it in the columns array
            let col = Array.from(document.querySelectorAll(`tbody tr td:nth-child(${i + 1})`));
            columnsArray.push(col);

            // we take the table headings names attributes and push them in the table headers array
            let tableHeadings = tableHeaders[i].querySelector('input').getAttribute('name');
            // here we take the name attribute of the table headings (their names)
            tableHeadersArray.push(tableHeadings);
            // and push them into array
        }   
    }
   

    // we iterate through the columns array and fill the result array with objects

    for (let i = 0; i < columnsArray[0].length; i++) {
            resultArr.push( {} );
    }

    // we iterate with two nested loops the columns array again and the result array at the same time 

    for (let i = 0; i < columnsArray.length; i++) {

        for (let j = 0; j < resultArr.length; j++) {

            resultArr[j][ tableHeadersArray[i] ] = columnsArray[i][j].textContent;

        }
    }

    let result = JSON.stringify(resultArr);

    document.getElementById('output').value = result;

}
