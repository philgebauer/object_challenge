var locations = []; // this array will hold your objects

function State(state, revenue, locationCount) {
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function() {
    return this.locationCount / this.revenue;
  }
}

var illinois = new State ("IL", 5000, 12);
var minnesota = new State ("MN", 300, 3);
var nevada = new State ("NV", 25000, 1);

locations.push(illinois);
locations.push(minnesota);
locations.push(nevada);


console.log(locations);

// object constructor

// object instances

// push object instances to locations array

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
