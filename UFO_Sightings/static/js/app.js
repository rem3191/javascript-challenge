// DEFINING UNCHANGING VARIABLE FOR A COPY OF ORGINIAL DATA FILE (DATA.JS)
const tableData = data;

// selecting tbody as location for populated data within table
const tbody = d3.select("tbody");

// creating function to add rows and columns for each data row and column in tableData
function buildTable(data) {
  // resetting the tbody
  tbody.html("");

  // using a loop appending a row into my table
  data.forEach((dataRow) => {
  
    const row = tbody.append("tr");
    
    // CONVERTING DATA ROW FROM OBJECT TO A LIST OF LIST AND RUNNING A FOR LOOP OVER IT
    // NOTE TO MYSELF: OBJECT.VALUES() MUST BE USED BECUASE DATAROW WAS AN OBJECT, WHICH CANNOT BE LOOPED OVER.
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// BUILDING TABLE UPON STARTUP OF WEBSITE
buildTable(tableData);

// CREATING FUNCTION TO ACTIVATE FILTRATION OF DATA, BASED ON USER INPUT.
function handleClick() {

  // RECEIVING USER'S DATE INPUT
  var date = d3.select("#datetime").property("value");
  // CREATE COPY OF DATA
  let filteredData = tableData;

// CHECKING FOR A DATE IN USER DATE INPUT
  if (date) {
    // FILTERS DATA BY USER DATE INPUT
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // REBUILD TABLE USING FILTERED DATA
  buildTable(filteredData);
}

// DO NOT TOUCH _ MUST STAY AFTER DEFINED FUNCTION HANDLECLICK
d3.selectAll("#filter-btn").on("click", handleClick);



