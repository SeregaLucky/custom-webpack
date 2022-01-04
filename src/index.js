/* CLEAR ALL IN INDEX.JS */
/* WRITE THIS YOUR CODE */

import mes from './js/mes';
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
