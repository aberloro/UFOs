// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 library from JS
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear existing data
    tbody.html("");
    //loop through each object in data and
    // append a row and cells for each value in row
    data.forEach((dataRow) => {
        // append row to tbale body
        let row = tbody.append("tr");
        
        
        //loop through fields in data row and 
        //add each value a a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }   
        );
    });


}