/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */
// downloads data via ajax call from git
//RE WRITE TO TAKE IN THE URL AND DOWNLOADS A JSON FILE
//var downloadData = $.ajax("https://raw.githubusercontent.com/CPLN-692-401/datasets/master/json/philadelphia-bike-crashes-snippet.json");
var downloadData = url => $.ajax(url); //good

// Parses the json data brought in by AJAX call above
var parseData = dat => JSON.parse(dat.responseText); //good

// Creates an array of L.marker objects
// TO DO: ADD ABILITY TO TAKE IN THE KEY VALUES
var makeMarkers = function(dat, latKey, lngKey) {
  var marks = [];
  for (var i = 0; i < dat.length; i++){
    marks[i] = L.marker([dat[i][latKey], dat[i][lngKey]]);
  }
  return marks;
};

// plots a set of L.marker objects
var plotMarkers = function(markers) { for(var n = 0; n < markers.length; n++){markers[n].addTo(map);}};

// removes a set of L.marker objects
var removeMarkers = function(markers) {for (var n = 0; n < markers.length; n++){map.removeLayer(markers[n]);}};

/* =====================
 Leaflet setup
===================== */

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/* =====================
 CODE EXECUTED HERE!
===================== */
/*
downloadData.done(function(data) { //THE PROBLEM LINE: downloadData.done is not a function
  var parsed = parseData(downloadData);
  var markers = makeMarkers(parsed);
  plotMarkers(markers);
  removeMarkers(markers);
});
*/
