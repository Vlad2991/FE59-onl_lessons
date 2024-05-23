
import { CLICK_EVENT } from './const.js';
import { addClass, removeClass } from './func.js';

const popupWrapper = document.querySelector('.wrapper-popup');
const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBurger = document.querySelector('.close');


hamburger.addEventListener(CLICK_EVENT, function (e) {
    e.preventDefault();
    addClass(popupWrapper, 'open');
    addClass(menu, 'show');
});


closeBurger.addEventListener(CLICK_EVENT, function () {
    menu.classList.toggle('show');
    removeClass(popupWrapper, 'open');
});