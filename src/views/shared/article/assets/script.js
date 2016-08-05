import './style.css';

// import template
import  '../index.html.twig';

const clog = console.log("console log de la page article 25");

const sum = (a, b = 6) => (a + b);

const square = (b) => {
    return b * b;
};

const variable = 8;

class MyClass {
    constructor(credentials) {
        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo
    }
    getName() {
        return this.name;
    }
}

// Test for multiple import dependency
import jQuery from 'vendor/jquery/dist/jquery';

jQuery(document).ready( function(){

    console.log( 'ok' );

} );

export { sum, square, variable, MyClass, clog };
