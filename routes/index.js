const billRoutes = require('./bill');

//This method will be used in app.js to route send the user to specific url or respond if not found
const constructorMethod = (app) => {
  app.use('/', billRoutes);
  app.use('*', (req, res) => {
    res.status(404).json({error: 'Page Not found'});
  });
};


module.exports = constructorMethod;