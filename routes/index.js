var subdomain = require('express-subdomain');
var express = require('express');
var router = express.Router();

var v1Routes = express.Router();
var v2Routes = express.Router();

// HTMLファイル側はフォームでアップロードファイルを選択させます
router.get('/', (req, res) => { 
  res.send("router");
});

v1Routes.get('/', (req, res) => { 
  res.send("v1Routes");
});

v2Routes.get('/', (req, res) => { 
  res.send("v2Routes");
});

router.use(subdomain('*.v1', v1Routes));
router.use(subdomain('*.v2', v2Routes));

module.exports = router;
