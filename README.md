# Isometrica

Isometrica requires the following software:

- NodeJS (with NPM)
- MongoDb
- Node modules: bower & loopback. Install with **npm install -g strongloop bower**

After cloning this project run a **npm install** and **bower install** to load all required libraries.

When developing you can start the Loopback server with **nodemon** using **npm run dev**. This of course requires that you have nodemon installed.

## Grunt

grunt watch : check for SASS changes, compile into resilify.css
grunt lbAngular : regenerate AngularJS services for Loopback