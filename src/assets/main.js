// import stylesheet
import  './main.css';

// import template
import  'template/layout.html.twig';

// import img
import './img/sample.jpg';

import {sum, square, variable, MyClass} from 'template/components/home/assets/script';

// 25
console.log(square(5));

var cred = {
    name: 'Ritesh Kumaro',
    enrollmentNo: 11115078
}

var x = new MyClass(cred);

//Ritesh Kumaro
console.log(x.getName()); 

// Load Vendor or/and external dependencys
// with, or not, to be included to the build
//
// import $ from 'vendor/jquery/dist/jquery';
// where vendor are an alias to node_modules

import $ from 'vendor/jquery/dist/jquery';

$(document).ready( function(){

    console.log('pouet');

    $('.button_1').on('click', function(){
        console.log('inner pouet');
    });

});

// import Zepto but without include it to the build
import Zepto from 'customImport';

Zepto(function($){

    alert('Ready to Zepto!')

})
