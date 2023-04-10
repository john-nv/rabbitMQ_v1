const PrematchGameRouter = require('../API/PrematchGame/route')
const LivematchGameRouter = require('../API/LivematchGame/route')

function router(app) {
    app.use('/LivematchGame', LivematchGameRouter)
    app.use('/PrematchGame', PrematchGameRouter)
}

module.exports = router;