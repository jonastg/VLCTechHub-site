let router = require('express').Router();

router.get('/', function(req, res) {
  res.json({ message: 'Welcome to VLCTechHub api!' });
});

router.use('/events', require('./events'));

module.exports = router;
