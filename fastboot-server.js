/* eslint-env node */

const FastBootAppServer = require('fastboot-app-server');
const ExpressHTTPServer = require('fastboot-app-server/src/express-http-server');
const express = require('express');

const httpServer = new ExpressHTTPServer(/* {options} */);
const app = httpServer.app;
let router = express.Router();

console.log('router', router);

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

let server = new FastBootAppServer({
  httpServer: httpServer,
  distPath: 'dist',
  gzip: true,
  // Force HTTPS. Also required for gzip on Heroku.
  beforeMiddleware(app) {
    app.use((request, response, next) => {
      if (request.headers['x-forwarded-proto'] === 'https') {
        return next();
      } else {
        return response.redirect(301, `https://${request.hostname}${request.url}`);
      }
    });
  }
});

server.start();
