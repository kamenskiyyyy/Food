import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal();
    timer('.timer', '2021-03-11');
    cards();
    calc();
    forms('.form', modalTimerId);
    slider();
});