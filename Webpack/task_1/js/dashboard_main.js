import $ from 'jquery';
import debounce from 'lodash/debounce';

// Add required elements in order
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append("<button id='start-btn'>Click here to get started</button>");
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

// Counter logic
let clickCount = 0;

function updateCounter() {
  clickCount += 1;
  $('#count').text(`${clickCount} clicks on the button`);
}

// Initialize display
$('#count').text(`${clickCount} clicks on the button`);

// Bind debounced click handler (500 ms)
$('#start-btn').on('click', debounce(updateCounter, 500));
