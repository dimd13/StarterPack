// import stylesheet
import  './main.css';

// import template
import  'template/layout.html.twig';

// import img
import './img/sample.jpg';

import {sum, square, variable, MyClass} from 'template/shared/article/assets/script';

// 25
console.log(square(5));

var cred = {
    name: 'Ritesh Kumaro',
    enrollmentNo: 11115078
}

var x = new MyClass(cred);

//Ritesh Kumar
console.log(x.getName()); 

// Load $ has module, and use it

// if you want dependancy was bundled with all other scripts, require it like that, and remove browserify-shim from package.json
// var $ = require('./vendor/jquery-2.2.0.min.js');
// 
// But if you want your depency stay external, require it like that and add browserify-shim
// var $ = require('jquery');
// or in ES6
// import $ from 'vendor/jquery/dist/jquery';
// where vendor are an alias to node_modules

import $ from 'vendor/jquery/dist/jquery';

$(document).ready( function(){

    console.log('pouet');

    $('.button_1').on('click', function(){
        console.log('inner pouet');
    });

});
