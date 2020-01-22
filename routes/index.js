const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    console.log('tweets', tweets)
    res.render('index', { title: 'twitter', twitter: tweets });
});

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Tweety',
        people: [
            { name: 'item #1' },
            { name: 'item #2' },
            { name: 'item #3' },
            { name: 'item #4' },
        ]
    });
});
module.exports = router;