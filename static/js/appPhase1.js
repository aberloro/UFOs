// import the data from data.js by decclaring a const variable
const tableData = data;

// Reference the HTML table using d3 library from JS
var tbody = d3.select("tbody");

//how to build a table from our array?
function buildTable(data) {
    // Clear existing data
    tbody.html("");
    
    //loop through each OBJECT in "data" with forEach()
    //and append a row and cells for each value in row
    data.forEach((dataRow) => {
        // append row to table body
        let row = tbody.append("tr");
                
        //loop through fields in object and 
        //add each value from object into a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }   
        );
    });
}

//how to handle a click?
function handleClick() {
    //use .select() to filter for element that matches #datetime HTML tag value
    //and store that value in 'date' variable
    let date = d3.select("#datetime").property("value");
    
    //set up variable to hold filtered data 
    //and set it equal to our array in case no filter is entered
    let filteredData = tableData;
    
    //check if date was entered    
    //only keep rows where `datetime` value matches the filter value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
        
    // Rebuild the table using the filtered data and our buildTable()
    buildTable(filteredData);
};

//how to detect a click? Have d3 listen for button click and
// execute handleClick() when #filter-btn html tag is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

//let readers view original table prior to filtering
buildTable(tableData);
