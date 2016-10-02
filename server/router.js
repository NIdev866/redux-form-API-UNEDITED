module.exports = function(app) {
  // run function when user visits '/'
  app.get('/', function(req, res, next) {
    res.send(['water', 'bottle', 'phone']);
  });
};
