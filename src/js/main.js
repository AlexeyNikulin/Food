import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import form from './modules/form';
import mask from './modules/mask';
import card from './modules/cards';
import slider from './modules/slider';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    tabs();
    timer();
    mask();
    modal();
    form();
    card();
    slider();
    calc();
});