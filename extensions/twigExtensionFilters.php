<?php

function twigExtensionFilters(\Twig_Environment &$twig) {

    /**
    *   Image Filters
    *   /src/PMD/TEL/FrontBundle/Twig/ResizerExtension.php
    */

    $twig->addFilter('image_fit', new \Twig_SimpleFilter('image_fit', 'imageFit', array(
            'is_safe' => array('html'),
            'needs_environment' => true
    )));
    $twig->addFilter('image_pad', new \Twig_SimpleFilter('image_pad', 'imagePad', array(
            'is_safe' => array('html'),
            'needs_environment' => true
    )));

    /**
    *   Image Filters
    *   /src/PMD/TEL/FrontBundle/Twig/ReplaceImageTemplateExtension.php
    */

    $twig->addFilter('replace_image_template', new \Twig_SimpleFilter('replace_image_template', function ($context, $destination) {}));

    /**
    *   Locale Filters
    *   /vendors/twig/extensions/twig/lib/Twig/Extensions/Extension/Intl.php
    */

    $twig->addFilter('localizeddate', new \Twig_SimpleFilter('localizeddate', function ($context, $destination) {}));

    /**
    *   Router Filters
    *   /src/PMD/TEL/FrontBundle/Twig/RouterExtension.php
    */

    $twig->addFilter('resource_url', new \Twig_SimpleFilter('resource_url', function ($context) {
        return '#';
    }));
    $twig->addFilter('category_url', new \Twig_SimpleFilter('category_url', function ($context) {
        return '#';
    }));


    $twig->addFilter('cdnify', new \Twig_SimpleFilter('cdnify', function ($context) {
        return $context;
    }));
    $twig->addFilter('linkbooster_url', new \Twig_SimpleFilter('linkbooster_url', function ($context) {}));


    $twig->addFilter('shorten', new \Twig_SimpleFilter('shorten', function ($context) {
        return $context;
    }));

};

function imageFit(\Twig_Environment &$twig, $image, $width = null, $height = null, array $parameters = [], $title = null, $format = null){
    return 'http://lorempixel.com/'.$width.'/'.$height.'/';
};

function imagePad(\Twig_Environment &$twig, $image, $width = null, $height = null, array $parameters = [], $title = null, $format = null){
    return 'http://lorempixel.com/'.$width.'/'.$height.'/';
};
