/* eslint-env node */
const FastBootAppServer = require('fastboot-app-server');
const ExpressHTTPServer = require('fastboot-app-server/src/express-http-server');

const httpServer = new ExpressHTTPServer();
const app = httpServer.app;
const api = require('./api/index');

app.use('/api', api);

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
