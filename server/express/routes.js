var path = require('path');

module.exports = function(app, express) {
  app.use(express.static(path.join(__dirname, '../../client')));
  app.use('/bower_components', express.static(path.join(__dirname, '../../bower_components')));

  var router = express.Router();

  require('./api')(app, router);

  // api routes (/api/*)
  app.use('/api', router);
};