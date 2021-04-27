// jQuery goes in the head of each HTML page





var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "http://swapi.co/api/"); //Making a request  ("GET/POST/PUT/DELETE", "API URL")
xhr.send(); //Sending the request


xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    document.getElementById ("data").innerHTML = this.responseText;
    data = JSON.parse(this.responseText);
}
};

// setTimeout Function
setTimeout(function(){
console.log(data):
}, 500);//Telling the console.log(data) to wait 500 milliseconds before executing so that the "onreadystatechange" has time to reach a ready state of 4




// Using the Caalback Function
// Callback Function - a callback is a function that's passed as a parameter to another function and executed inside that function.
//  They get around problems of timeout and because only invoked when we want them to 

function getData(cb) { //cb stads for callback
var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "http://swapi.co/api/"); //Making a request  ("GET/POST/PUT/DELETE", "API URL")
xhr.send(); //Sending the request


xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  document.getElementById ("data").innerHTML = this.responseText;
  cb = JSON.parse(this.responseText);
}
};
}

function printDataToConsole(data){
console.log(data);
}

getData(printDataToConsole) ;


// Eg
<html>
<body>
<button onclick="writeToDocument('http://swapi.co/api/people')">People</button>
<button onclick="writeToDocument('http://swapi.co/api/plants')">Plants</button>
<button onclick="writeToDocument('http://swapi.co/api/species')">Species</button>
<button onclick="writeToDocument('http://swapi.co/api/starships')">Starships</button>
<button onclick="writeToDocument('http://swapi.co/api/vehicles')">Vehicles</button>
<button onclick="writeToDocument('http://swapi.co/api/films')">Films</button>
<div id="data"></div>
</body>
</html>



function getData(url, cb){
var xhr = new XMLHttpRequest();


xhr.open("GET", url); 
xhr.send(); //Sending the request


xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    document.getElementById ("data").innerHTML = this.responseText;
    data = JSON.parse(this.responseText);
}
};

function getTableheaders(obj){
var tableHeaders = [];
Object.keys(obj).forEach(function(key) {
   tableHeaders.push(`<td>${key}</td>`);
});
return `<tr>${tableHeaders}</tr>`;
}

function generatepaginationButtons(next, prev) {
if (next && prev) {
  return `<button onclick="writeToDocument('${prev}')>Previous</button>
  <button onclick="writeToDocument"('${next}')">Next</button>`;
} else if (next && !prev) {
  return `<button onclick="writeToDocument('${next}')">Next</button>
          <button onclick="writeToDocument('${prev}')">Previous</button>`;
}
}
function writeToDocument(url) {
var tableRows = [];
var el = document.getElementById(data); //el stands for element
el.innerHTML = ""; //clears it everytime button is clicked

getData(url, function(data) {
//    console.dir(data);//dir is directory - this shows object prperties 
// rather then [object]?
  if (data.next || data.previous) {
      var pagination;
      pagination = generatPaginationButtons(data.next, data.previous);

  }
  data = data.results;
  var tableHeaders = getTableHeaders(data[0]);

  data.forEach(function(item) {
      // forEach()
      var dataRow = [];

      Object.keys(item).forEach(function(key) {
          var rowData = item[key].toString();
          var truncatedData = rowData.substring(0, 15);
          dataRow.push(`<td>${truncatedData}</td>`);
      });
      tableRows.push(`<tr>${dataRow}</tr>`);
  });

  el.innerHTM = `<table>${tableHeaders}${tableRows}${pagination}</table>`.replace(/,/g, "") ;       
});
}

// Pagination
// Object.key
// Tabular data and Truncated Data