/* CLEAR ALL IN INDEX.JS */
/* WRITE THIS YOUR CODE */

import mes from './js/mes';
import { aaa } from './js/deadCodeVars'; // NOT // new TerserPlugin() - WORK
import './js/myDate'; // WORK
import './js/deadCode'; // WORK

import './styles/fonts.css';
import './styles/styles.css';
import './styles/styles2.scss';
import santa from './images/santa.svg';
import cat from './images/cat1.jpg';

const aa = () => console.log(mes);
aa();

/* ADD IMG THROUGH JS */
const img = new Image();
img.src = cat;
document.querySelector('.contCat').append(img);

/* ADD SVG */
document.querySelector('.contSvg').insertAdjacentHTML('beforeend', santa);

/* WATCH CUSTOM VALUE IN PROCESS.ENV */
console.log(111111111, window.process);
console.log(111111111, process);
// const { MY_PASSWORD = 1, API = 1 } = process.env;
// console.log('MY_PASSWORD', MY_PASSWORD);
// console.log('API', API);

// console.log('aaa', aaa);
