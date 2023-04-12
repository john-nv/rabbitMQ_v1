const router = require('express').Router()
const PrematchGame = require('../manager/PrematchGame')
const multer = require('multer');
const upload = multer({ dest: 'data/' });

router.post('/endpoints',upload.single('file'), PrematchGame.insert)

module.exports = router