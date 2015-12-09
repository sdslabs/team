# jekyll-grunt-boilerplate
Created using grunt to run jekyll for a multi-page static site.

## Requirements
 1. Ruby
 2. NodeJS

## Installation
 1. run `gem install bundler`
 2. run `bundle install`
 3. run `npm install`
 4. run `npm install grunt-cli`
 5. run `npm install bower`
 6. run `bower install`

## Building and Serving
This project uses Grunt to build, serve, and handle asset concatination and minification. Jekyll tasks are triggered by Grunt when we need to build site pages or compile sass files. So, the only commands you need to worry about running are two basic grunt tasks.
 - `grunt` or `grunt build` will create a production ready _dist folder, with all the static html and assets.
 - `grunt serve` will build the site to a .jekyll folder, and serve it at http://localhost:4000. Grunt watches for changes and will update as needed, without regenerating everything, everytime.
