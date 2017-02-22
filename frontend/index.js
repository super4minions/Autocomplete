function r() {
    var dataList = document.getElementById('json-datalist');
    var input = document.getElementById('ajax');
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
                input.placeholder = "e.g. datalist";
            } else {
                input.placeholder = "Couldn't load datalist options :(";
            }
        }
    };
    request.open('POST', 'https://mohanaji-search.herokuapp.com/getdata', true);
    request.send(input.value);
}
