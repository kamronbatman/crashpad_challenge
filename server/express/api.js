module.exports = function(app, router) {
  require('./apis/requests')(app, router);
};