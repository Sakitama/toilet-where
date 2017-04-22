var express = require('express');
var xss = require('xss');
var fs = require('fs');
var router = express.Router();
var PATH = './public/data/';
var COUNT = 50;
var SUCCESS = 0;
var FAIL = 1;

router.get('/read', function(req, res, next) {
    var type = req.query.type;
    if (!type) {
        return res.send({
            status: FAIL,
            reason: 'Need query type!'
        });
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
        if (data.length > COUNT) {
            data = data.slice(0, COUNT);
        }
        return res.send({
            status: SUCCESS,
            data: data
        });
    });
});

router.post('/write', function(req, res, next) {
    if (!req.session.user) {
        return res.send({
            status: FAIL,
            reason: '未鉴权认证'
        });
    }
    var type = req.body.type;
    var url = req.body.url;
    var title = req.body.title;
    var img = req.body.img;
    var filePath;
    var temp;
    if (!type || !url || !title || !img) {
        return res.send({
            status: FAIL,
            reason: 'Need query type, url, title and img!'
        });
    }
    filePath = PATH + type + '.json';
    fs.readFile(filePath, function (err, data) {
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
        temp = {
            img: img,
            url: url,
            title: title,
            id: guidGenerator(),
            time: new Date()
        };
        data.unshift(temp);
        fs.writeFile(filePath, JSON.stringify(data), function (err) {
            if (err) {
                return res.send({
                    status: FAIL,
                    reason: 'Write file failed!'
                });
            }
            return res.send({
                status: SUCCESS,
                data: temp
            });
        })
    });
});

router.post('/config', function(req, res, next) {
    if (!req.session.user) {
        return res.send({
            status: FAIL,
            reason: '未鉴权认证'
        });
    }
    var filePath = PATH + 'config.json';
    var data = req.body.data;
    data = xss(data);
    try {
        data = JSON.parse(data);
    } catch (err) {
        data = [];
    }
    fs.writeFile(filePath, JSON.stringify(data), function (err) {
        if (err) {
            return res.send({
                status: FAIL,
                reason: 'Write file failed!'
            });
        }
        return res.send({
            status: SUCCESS,
            data: data
        });
    })
});

router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    username = xss(username);
    password = xss(password);
    if (username === 'admin' && password === '123456') {
        req.session.user = {
            username: username
        };
        return res.send({
            status: SUCCESS,
            information: 'Sign in success!'
        });
    }
    return res.send({
        status: FAIL,
        reason: 'Sign in failed!'
    });
});

function guidGenerator() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}

module.exports = router;