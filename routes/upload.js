// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const express = require('express');
var router = express.Router();
const multer = require('multer');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });

router.get("/", function(req,res){
    res.render("upload", {});
});

router.post('/single', upload.single('singlefile'), function(req,res,next){
    console.log(req.file);
    res.redirect('/upload');
});

router.post('/multiple', upload.array('multiple',10), function(req,res,next){
    console.log(req.file);
    res.redirect('/upload');
});

module.exports = router;