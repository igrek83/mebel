import './styles/index.scss';
import Image from './js/Image';
import Popup from './js/Popup';

const block = document.querySelector('.about__block');
const box  = document.querySelector('.direction__box');
new Image(block);
new Popup(box);
