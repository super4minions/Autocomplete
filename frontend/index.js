function r() {
var dataList = document.getElementById('json-datalist');
var input = document.getElementById('ajax');

// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function(response) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      // Parse the JSON
      var jsonOptions =JSON.parse(request.responseText);
console.log(Object.keys(jsonOptions)[0])

        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = Object.keys(jsonOptions)[0];
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      ;
      input.placeholder = "e.g. datalist";
    } else {
      // An error occured :(
      input.placeholder = "Couldn't load datalist options :(";
    }
  }
};

// Update the placeholder text.
input.placeholder = "Loading options...";

// Set up and make the request.

request.open('POST', 'http://localhost:8080/getdata', true);
request.send(input.value);

}