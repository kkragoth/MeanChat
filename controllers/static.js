var router = require('express').Router()
var express = require('express')
router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../layouts'))

router.get('/', function(req, res) {
  res.sendfile('layouts/app.html')
})

module.exports = router
