const router = require('express').Router()
const PrematchGame = require('../manager/PrematchGame')

router.post('/endpoints', PrematchGame.insert)

module.exports = router