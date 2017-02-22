function r() {
    var dataList = document.getElementById('json-datalist');
    var input = document.getElementById('ajax');
   var t0 = performance.now();


    var request = new XMLHttpRequest();
    request.onreadystatechange = function(response) {
        var array = [];
        var jsonOptions = "";
        var option = "";
        while (dataList.hasChildNodes()) {
            dataList.removeChild(dataList.lastChild);
        }
        if (request.readyState === 4) {
            if (request.status === 200) {
                jsonOptions = JSON.parse(request.responseText);
                array = jsonOptions;
                // console.log(array)
                array.forEach(function(item) {
                    option = document.createElement('option');
                    option.value = item;
                    dataList.appendChild(option);

                });

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0)/1000 + " milliseconds.")

                input.placeholder = "e.g. datalist";
            } else {
                input.placeholder = "Couldn't load datalist options :(";
            }
        }
    };
    request.open('POST', 'http://localhost:8080/getdata', true);
    request.send(input.value);
}
