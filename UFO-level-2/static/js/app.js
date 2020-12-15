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
    
    // if I have time I'll come back and try to do this a different way 
    // maybe try to incorporate a drop down
    // not really a fan of declaring every single variable like this
    var dateTime = d3.select('#datetime').property('value')
    // probably want the next few to be lowercase
    var inputCity = d3.select('#city').property('value').toLowerCase();
    var inputState = d3.select('#state').property('value').toLowerCase();
    var inputCountry = d3.select('#country').property('value').toLowerCase();
    var inputShape = d3.select('#shape').property('value').toLowerCase();

    filteredData = tableData;
    
    if(dateTime){
        filteredData = filteredData.filter(entry => entry.datetime === dateTime);
    }
    if(inputCity){
        filteredData = filteredData.filter(entry => entry.city === inputCity);
    }
    if(inputState){
        filteredData = filteredData.filter(entry => entry.state === inputState);
    }
    if(inputCountry){
        filteredData = filteredData.filter(entry => entry.country === inputCountry);
    }
    if(inputShape){
        filteredData = filteredData.filter(entry => entry.shape === inputShape);
    }
    
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
