<?php

function twigDumpExtension(\Twig_Environment &$twig) {
    $twig->enableDebug();
    $twig->addExtension(new \Twig_Extension_Debug());
};
