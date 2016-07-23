/**
 * Created by Lukas on 17-07-2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/day-1-exercises', function(req, res, next) {
    res.render('notes/day-1-exercises', { title: 'Day 1' });
});

module.exports = router;
