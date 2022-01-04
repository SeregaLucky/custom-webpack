import mes from './js/mes';
import './styles/styles.css';
import './styles/styles2.scss';

const aa = () => console.log(mes);
const bb = () => console.log(mes);
const cc = () => console.log(mes);
const dd = () => console.log(mes);
const zz = () => console.log(mes);

aa();
bb();
cc();
dd();
zz();

function aaa({ currentTarget }) {
  if (currentTarget.nodeName === 'CODE') {
    const div = document.createElement('div');
    div.innerHTML = currentTarget.innerHTML;
    currentTarget.parentNode.replaceChild(div, currentTarget);
    return;
  }

  if (currentTarget.nodeName === 'DIV') {
    const code = document.createElement('code');
    code.innerHTML = currentTarget.innerHTML;
    currentTarget.parentNode.replaceChild(code, currentTarget);
  }

  var original_html = document.getElementById('foo').innerHTML;
  original_html = original_html.replace('<span>', '<div>');

  //  original_html = original_html.replace(new RegExp("</span>"+$), "</div">)
  document.getElementById('foo').innerHTML = original_html;
}
