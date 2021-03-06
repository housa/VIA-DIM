/**
 * Created by Lukas on 17-07-2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Course page' });
});

router.get('/website-upload', function (req, res) {
    res.render('website-upload', { title: 'Upload a file to your website' });
});

router.get('/:studentName*', function (req, res) {
    var studentName = req.params.studentName;
    var path = req.params[0] ? req.params[0] : 'index.html';
    res.sendFile(path, {root: './public/webpages/' + studentName});
});

module.exports = router;
