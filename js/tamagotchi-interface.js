import { Tamagotchi } from './../js/tamagotchi.js';

$(function() {
  $('#start-button').click(function(event) {
    event.preventDefault();
    var newTamagotchi = new ObjectName(propertyInput);
    var output = newObject.methodName(InputParameter);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
