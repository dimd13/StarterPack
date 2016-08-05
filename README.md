# Install

After  ‘‘‘$ git clone‘‘‘ make a ‘‘‘$ npm install‘‘‘ install all your needed NPM Package

# List commmandes

* ‘‘‘$ npm start‘‘‘ launch an [Express](https://expressjs.com/) + [BrowserSync](https://www.browsersync.io/) local server.
* ‘‘‘$ npm run build:prod‘‘‘ build, copy all your file and assets in relevant folders : all img go to ‘‘‘/build/assets/img/‘‘‘ folder, CSS & JS files go to ‘‘‘/build/assets/main.(js|css)‘‘‘, and template file are cpy, with folder hierarchie.
* ‘‘‘npm run eslint:test‘‘‘ perform a full linting of all JS files in ‘‘‘/src/‘‘‘ and reporte error in console. Follow the [Standard JS StyleGuide](http://standardjs.com/rules.html) except for indent, who are of 4 spaces.
* ‘‘‘npm run eslint:format‘‘‘ try to format you JS file againt rules defined in ‘‘‘eslintrc‘‘‘ file, if can't prompt for error.
* ‘‘‘npm run stylelint:test‘‘‘ perform a recursive linting of CSS file, againt [Stylelint Config Standard](https://github.com/stylelint/stylelint-config-standard), with 4 indent rule.
* ‘‘‘npm run stylefmt:test‘‘‘ try to format your stylesheet according to rules specified in ‘‘‘.stylelintrc‘‘‘ file.

