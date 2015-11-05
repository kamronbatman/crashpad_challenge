# [CrashPad Challenge](http://www.getcrashpad.com)
[![Dependency Status](https://david-dm.org/kamronbatman/crashpad_challenge.svg)](https://david-dm.org/kamronbatman/crashpad_challenge)
[![devDependency Status](https://david-dm.org/kamronbatman/crashpad_challenge/dev-status.svg)](https://david-dm.org/kamronbatman/crashpad_challenge#info=devDependencies)<br>

> CrashPad Coding Challenge

## Instructions
* Create an HTML page that loads these data points from a server and plots them on a map.
* Use any back end you would like, e.g. Parse, express, etc.
* Use any client side framework you want to retrieve and display the data, e.g. Angular, Backbone, mapping tools, animation frameworks, etc
* When you click on a pin, it should display extended information about that request, including the description and anything else you feel relevant.

## Bonus Points
* Animate the requests appearing on the map in chronological order

## Table of Contents

1. [Requirements](#requirements)
1. [Installation](#installation)
    1. [Environment Configuration File](#environment-configuration-file)
    1. [Deployment](#deployment)

## Requirements

### Backend
- [Node.js](https://nodejs.org/)
- [Express](http://expressjs.com/)

### Frontend
- [Polymer](https://www.polymer-project.org/)

### Utilities
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [npm](https://www.npmjs.com/)

## Installation

### Environment Configuration File

In the root of the project, add a file called `.env` with the following:
```
NODE_ENV    = 'development'

port            = 80
portDev         = 8000
```

In the .env file, change NODE_ENV to `production` for deployment on a production server.

### Deployment

With [Grunt](http://gruntjs.com/getting-started), [Bower](http://bower.io/), and [npm](https://www.npmjs.com/#getting-started) installed globally, install dependencies by running the following commands from the terminal:
```
npm install && bower install
grunt
```

`grunt` starts the server and watches for changes. To build the project without starting the server, run `grunt build` instead of `grunt`.

To stop the server from running in the background in production mode, run `grunt stop`.
