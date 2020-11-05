# weather-app
A weather app using Handlebars templating and Express.

# How to get set up

$ mkdir weather-app (create new directory)

$ cd weather-app (change into new directory)

$ npm init -y (creates a package.json file using the defaults)

$ npm i express

$ npm i handlebars (installs both express and handlebars)

# Install nodemon

$ npm i -g nodemon (installs nodemon globally)

update package.json to include a start script as below:
$ "start": "nodemon index.js"

# Install node fetch

$ npm i node-fetch

# Install dotenv

$ npm i dotenv

# Structuring the file system

$ mkdir views, lib, public

$ touch index.js

$ cd public

$ mkdir images

$ touch main.css

$ cd ../views

$ mkdir layouts, partials

$ touch index.hbs, 404.hbs

$ cd layouts 

$ touch main.hbs 