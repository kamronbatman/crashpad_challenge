var Promise  = require('bluebird'),
    path     = require('path');
var fs       = Promise.promisifyAll(require('fs'));

module.exports = function(app, router) {

  function requestsHandler(req, res, next) {
    fs.readFileAsync(path.join(__dirname,'../../../assets/CrashRequest.json'), { encoding: 'utf8' })
    .then(function(data) {
      res.json(JSON.parse(data));
    });
  }

  router.get('/requests', requestsHandler);
};