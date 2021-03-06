var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

// uploadディレクトリを、絶対値表記にする  
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd()+'/public/billboards');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

// アップロードディレクトリを設定したmulterモジュール  
const uploadDir = multer({storage: storage}); 

// HTMLファイル側はフォームでアップロードファイルを選択させます
router.get('/', (req, res) => { 
  res.send(
    '<form method="POST" action="/" enctype="multipart/form-data">' +
      '<input type="file" name="upFile" /><br />' +
      '<input type="submit" value="アップロード" />' +
    '</form>'
  );
});

// Express 受信側
router.post('/', uploadDir.single('upFile'), (req, res) => {
  console.log('アップロードしたファイル名： ' + req.file.originalname);
  console.log('保存されたパス：' + req.file.path);
  console.log('保存されたファイル名： ' + req.file.filename);
});

module.exports = router;
