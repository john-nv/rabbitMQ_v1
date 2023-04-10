"use strict"
const path = require('path')
const fs = require('fs')

class LivematchGame {
  async insert(req, res) {
    try {
      // const data = req.body
      const data = {
        a:'x'
      }
      const dataFolder = path.join(__dirname, "./data")

      if (!fs.existsSync(dataFolder)) {
        fs.mkdirSync(dataFolder)
      }

      const fileName = `${Date.now()}.json`

      fs.writeFile(
        path.join(dataFolder, fileName),
        JSON.stringify(data),
        (err) => {
          if (err) {
            console.error(err)
            res.json(500).status("failed")
          } else {
            console.info(`save success: ${fileName}`)
            res.status(200).send("success")
          }
        }
      )
    } catch (e) {
      console.error(e)
      res.json(500).status("failed")
    }
  }
}

module.exports = new LivematchGame
