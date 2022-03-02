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

function handleClick() {
    //get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    //check if date was entered and then
    //filter data using that date    
    if (date) {
    // Apply `filter` to the table data to only keep the rows
    // where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData 
    // then filteredData will just be original tableData.
    buildTable(filteredData);
};

//have d3 listen for button click
d3.selectAll("#filter-btn").on("click", handleClick);

//let readers view original table prior to filtering
buildTable(tableData);
