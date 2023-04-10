const router = require('express').Router()
const LivematchGame = require('../manager/LivematchGame')

router.post('/endpoints', LivematchGame.insert)

module.exports = router