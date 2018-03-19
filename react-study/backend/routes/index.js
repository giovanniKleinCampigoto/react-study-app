const survivorRoutes = require('./survivor_routes');


module.exports = function(app, db) {
  survivorRoutes(app, db);
  // Other route groups could go here, in the future
};