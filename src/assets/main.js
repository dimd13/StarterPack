// import stylesheet
import  './main.css';

// import template
import  'template/layout.html.twig';

// import img
import './img/sample.jpg';

const clog = console.log("console log de la page home");

// Generators
const fibonacci = {
[cSymbol.iterator]: function*() {
var pre = 0,
cur = 1;
const dre = 0,
pur = 1;
for (;;) {
var temp = pre;
pre = cur;
cur += temp;
yield cur;
}
}
}

export { clog, fibonacci };
