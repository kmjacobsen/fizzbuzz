$(document).ready(function () {
  $('.formInput').on('submit', function(event) {
    event.preventDefault();

    var inputNumber = $('.inputBox').val();
    var number = +inputNumber;

    for (var i = 1; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        $('.result').append('<li> fizzbuzz </li>');
      }
      else if (i % 5 === 0) {
        $('.result').append('<li> buzz </li>');
      }
      else if (i % 3 === 0) {
        $('.result').append('<li> fizz </li>');
      }
      else {
        $('.result').append('<li>' + i + '</li>');
      }
    }
  }); // pairs with .formInput on submit
}); //pairs with document ready function
