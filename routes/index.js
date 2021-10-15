var express = require('express');
var router = express.Router();






/* GET home page. */
router.get('/', function(req, res, next) {

  // if((hour >= 9) && (hour <= 17)){
  //   res.render('index', { title: 'Express' });
  // }

  res.render('index', { title: 'Express' } );

});

router.get('/home', function(req, res, next) {

  // if((hour >= 9) && (hour <= 20)){
  //   res.render('home', { title: 'Express' });
  // }
  res.render('home', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {

  // if((hour >= 9) && (hour <= 20)){
  //   res.render('contact', { title: 'Express' });
  // }
  res.render('contact', { title: 'Express' });
});


module.exports = router;
