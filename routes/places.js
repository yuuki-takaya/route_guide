var express = require('express');
var router = express.Router();

var places = {};
var key = 'PlaceName';
places[key] = [];

var kenkaiConferenceRoom = {
    billboardObject: '',
    position: '',
    rotaiton: '',
    scale: ''
}

places[key].push(kenkaiConferenceRoom);

// [
//     {
//         Pos
//         Rot
//         Scal
//         url:~
//     },
// ]

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  res.setHeader('Content-Type', 'application/json');
  res.json({ "places": places});
  console.log(req.query);
});

module.exports = router;