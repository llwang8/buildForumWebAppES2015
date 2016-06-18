# Forum Web App

Put what I learned in JavaScript ES2015 to practice by building out features for a forum web app. The application pulls data from a backend API and populates a page with new HTML elements.

[Check it out! - to be deployed to aws](https://www.aws.com/)

# Built with JavaScript (ES2015), React.js, jsone-server, Babel with Gulp

Implement JavaScipt ES2015. Transpile ES2015 (including modules) with Babel, Gulp and Browserify.


# Installing

1. Clone the repo
2. `npm install -g gulp` to install Gulp globally.
3. `npm install` to resolve project dependencies.

# Developing

Run `gulp` from the command line and you are good to go!

gulpfile.babel.js is edit to include gulp.task so that "gulp watch" is needed once in the beginning to transpile the changes.

The project is currently setup to transpile code under the _/src_ folder using the _/src/app.js_ file as an entry point.

# Running

First, run the API with either json-server server/db.json
or json-server server/db.with.xss.json
then open up index.html



# Resources

Original inspirations from CodeSchool - Watch us build videos
- [Add a Build System to a React Application](https://www.codeschool.com/screencasts/add-a-build-system-to-a-react-application)
- [ES2015 and the Virtual DOM in a React Application](https://www.codeschool.com/screencasts/es2015-and-the-virtual-dom-in-a-react-application)
- [Add a Router to a React Application](https://www.codeschool.com/screencasts/add-a-router-to-a-react-application)

_A Code School subscription is required before watching the videos. Don't have one yet? [Sign up today!](https://www.codeschool.com/pricing)_


## Problems encountered and solutions

- Fixed gulp installation problem with Error: EACCES: permission denied
[source](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

- Fixed error - Requiring external module babel-register
[source](https://)

??  $ npm install --save-dev babel-register

$ npm install gulp && npm install gulp -g

$ npm install babel-core babel-preset-es2015 --save-dev

$ gulp -v

CLI version 3.9.1
Local version 3.9.1
