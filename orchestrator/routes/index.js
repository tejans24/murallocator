module.exports = function(app, passport, clientRootPath) {
  require('./modules/match_api.js')(app);
}
