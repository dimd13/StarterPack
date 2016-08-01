// import base stylesheet
import  './main.css';

import  '../layout.html.twig';

if(module.hot) {
    module.hot.accept();
}

// import module
import Header from '../shared/header/assets/script';
import Article from '../shared/article/assets/script';

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