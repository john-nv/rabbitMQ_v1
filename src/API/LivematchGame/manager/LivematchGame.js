"use strict"
const { returnError } = require('../../../Util/error')
const RabbitMQ = require('../../../ThirdParty/RabbitMQ/publish')
require('dotenv').config()

class PrematchGame {
  insert(req, res) {
    try {
      return res.status(200).json({success: true})
    } catch (e) {
      return returnError(res, 'liveMatch' ,req.originalUrl, 500 , e.message)
    }
  }
}

module.exports = new PrematchGame