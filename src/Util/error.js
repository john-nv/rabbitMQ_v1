const { format } = require("date-fns")
const fs = require('fs').promises
const path = require('path')

module.exports = {
    returnError: async function (res, nameFile, url, statusError, errorMessage) {
        const fileName = path.join(__dirname, `../logs/${nameFile}`, 'error.log')
        const contentLog = `\n${format(new Date(), 'dd-MM-yyyy ss:mm:HH')} | ${'url => ' + url} | ${'status => ' + statusError} | ${'error => ' + errorMessage}`
        fs.appendFile(fileName, contentLog)
        console.log(errorMessage)
        return res.status(statusError).json({
            success: false,
            error: errorMessage
        })
    },
}