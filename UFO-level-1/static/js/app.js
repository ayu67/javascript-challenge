// from data.js
var tableData = data;

// select the table body
var tbody = d3.select('tbody');

tableData.forEach((sighting) => {
    console.log(sighting);
    var row = tbody.append('tr');

    //Object.entries returns an array of an object's enumerable (key, value) pairs
    Object.entries(sighting).forEach(([key,value]) => {
        console.log(key,value);
        //using td, we wish to append a cell containing the value from the (key, value) pairs to each row
        //the td tag defines a standard data cell
        var cell = row.append('td');
        cell.text(value);
    })
})

// select the button
var button = d3.select('#filter-btn')
button.on('click', function(){

    d3.select('tbody').html('');
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    var dateTime = d3.select('#datetime').property('value');
    console.log(dateTime);

    var filteredData = tableData.filter(entry => entry.datetime === dateTime);
    console.log(filteredData);
    
    // repeat what we did above to generate cells for each row
    filteredData.forEach((sighting) => {
        var row = tbody.append('tr');

        Object.entries(sighting).forEach(([key,value]) => {
            console.log(key,value);
            var cell = row.append('td');
            cell.text(value);
        })
    })
})
