// import stylesheet
import  './main.css';

// import template
import  '../layout.html.twig';

// import img
import './img/sample.jpg';

// import vendor
import jQuery from 'vendor/jquery';

// import module
import Header from 'shared/header/assets/script';
import Article from 'shared/article/assets/script';

// Generators
var fibonacci = {
    [Symbol.iterator]: function*() {
        var pre = 0,
            cur = 1;
        for (;;) {
            var temp = pre;
            pre = cur;
            cur += temp;
            yield cur;
        }
    }
}

module.exports = fibonacci;