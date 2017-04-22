var express = require('express');
var router = express.Router();
var FAIL = 1;
var fs = require('fs');
var PATH = './public/data/';

router.get('/', function (req, res, next) {
    if (!req.session.user) {
        return res.render('login', {});
    }
    res.render('index', {});
});

router.get('/login', function (req, res, next) {
    res.render('login', {});
});

router.get('/recommend', function (req, res, next) {
    if (!req.session.user) {
        return res.render('login', {});
    }
    res.render('recommend', {});
});

router.get('/edit', function (req, res, next) {
    if (!req.session.user) {
        return res.render('login', {});
    }
    var type = req.query.type;
    if (type) {
        var obj = {};
        switch (type) {
            case 'article': {
                obj = {};
                break;
            }
            case 'it': {
                obj = {};
                break;
            }
            case 'manage': {
                obj = {};
                break;
            }
            case 'joke': {
                obj = {};
                break;
            }
            default: {
                return res.send({
                    status: FAIL,
                    reason: 'unexpected parameter!'
                });
            }
        }
        fs.readFile(PATH + type + '.json', function (err, data) {
            if (err) {
                return res.send({
                    status: FAIL,
                    reason: 'Read file failed!'
                });
            }
            try {
                data = JSON.parse(data.toString());
            } catch (err) {
                data = [];
            }
            return res.render('edit', {
                data: data
            });
        });
    } else {
        return res.send({
            status: FAIL,
            reason: 'Unexpected parameter!'
        });
    }
});

module.exports = router;
