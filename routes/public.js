var express = require('express');

var router = express.Router();
const path = require("path");


router.get('/', function(req, res, next) {
    res.sendFile(path.resolve('public/main.html') );
});


router.get('/*', function(req, res, next) {
    res.sendFile(path.resolve('public/' + req.url) );
});

// Not Needed for now 
// router.get('/play_off.html', function(req, res, next) {
//     res.sendFile(path.resolve('public/play_off.html') ); 
// });

// router.get('/play_def.html', function(req, res, next) {
//     res.sendFile(path.resolve('public/play_def.html') );
// });

module.exports = router;