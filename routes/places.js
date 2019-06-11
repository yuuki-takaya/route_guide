var express = require('express');
var router = express.Router();
var places = {};
var key = 'PlaceName';
places[key] = [];
const Localip = "192.168.43.78:3000";



let kenkaiConferenceRoom = {
    kenkai: [
        {
            url:'http://' + Localip + '/billboards/grandfather.png',
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
            url: 'http://' + Localip + '/billboards/grandfather.png',
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
            url: 'http://' + Localip + '/billboards/grandfather.png',
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
            url: 'http://' + Localip + '/billboards/grandfather.png',
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
            url:'http://' + Localip + '/billboards/grandfather.png',
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
            url: 'http://' + Localip + '/billboards/grandfather.png',
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
            url: 'http://' + Localip + '/billboards/grandfather.png',
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
            url: 'http://' + Localip + '/billboards/grandfather.png',
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

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  res.setHeader('Content-Type', 'application/json');
  console.log(req.query.place);
  let placeName = req.query.place;
  if(req.query.place == 'kenkai'){
    console.log(places.PlaceName[0].kenkai);
    res.send(places.PlaceName[0].kenkai);
  }else if(req.query.place == 'toilet'){
    console.log(places.PlaceName[0].toilet);
    res.send(places.PlaceName[0].toilet);
  }else if(req.query.place == 'elevator'){
    console.log(places.PlaceName[0].elevator);
    res.send(places.PlaceName[0].elevator);
  }else if(req.query.place == 'reflesh'){
    console.log(places.PlaceName[0].reflesh);
    res.send(places.PlaceName[0].reflesh);
  }else{
    res.send("Your Request Place is not Registered");
  }
    
});
module.exports = router;