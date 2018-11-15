let router = require('express').Router();

router.get('/', function(req, res, next) {
  res.json({events: []});
  next();
});

module.exports = router;
