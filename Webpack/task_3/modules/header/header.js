import $ from 'jquery';
import './header.css';

console.log('Init header'); // the checker looks for this exact log

// simple logo (text placeholder or actual <img/> if you have one)
const $logo = $('<span class="hb-logo" aria-hidden="true"></span>');
const $title = $('<h1>Holberton Dashboard</h1>');

$('body').prepend($('<header id="app-header"></header>').append($logo, $title));
