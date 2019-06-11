var express = require('express');
var router = express.Router();

var places = {};
var key = 'PlaceName';
places[key] = [];

const Localip = "192.168.43.204:3000";

// var kenkaiConferenceRoom = {
//     characterObject: '',
//     billboardObject: 'http:/' + Localip + '/images/father.png',
//     position: '',
//     rotaiton: '',
//     scale: ''
// }


let kenkaiConferenceRoom = {
    kenkai: [
        {
            characterObject:'http://' + Localip + '・・・.obj',
            position: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            rotation: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            scale: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            }
        },
        {
            billboardObject: 'http://' + Localip + '・・・.obj',
            position: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            rotation: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            scale: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            }
        }
    ],

    toilet: [
        {
            characterObject: 'http://' + Localip + '・・・.obj',
            position: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            rotation: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            scale: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            }
        },
        {
            billboardObject: 'http://' + Localip + '・・・.obj',
            position: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            rotation: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            scale: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            }
        }
    ],

    elevator: [
        {
            characterObject:'http://' + Localip + '・・・.obj',
            position: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            rotation: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            scale: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            }
        },
        {
            billboardObject: 'http://' + Localip + '・・・.obj',
            position: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            rotation: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            scale: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            }
        }
    ],

    reflesh: [
        {
            characterObject: 'http://' + Localip + '・・・.obj',
            position: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            rotation: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            scale: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            }
        },
        {
            billboardObject: 'http://' + Localip + '・・・.obj',
            position: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            rotation: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            },
            scale: {
                'x': 0.1,
                'y': 0.2, 
                'z': 0.3
            }
        }
    ]
}




places[key].push(kenkaiConferenceRoom);
[
    {
        // Pos
        // Rot
        // Scal
        url: "http:/" + Localip + "/billboards/filename"
    },
]

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  res.setHeader('Content-Type', 'application/json');
  res.json({ "places": places});
  console.log(req.query);
});

module.exports = router;