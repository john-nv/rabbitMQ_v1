'use strict'
const mongoose = require('mongoose');
const connectString = 'mongodb://localhost:27017/???'
const {countConnect} = require('../helpers/check.connect')
console.log(`connectString : `, connectString);

class Database {
    constructor(){
        this.connect()
    }
    //connect
    connect(type = 'mongodb'){
        if(1 === 1){
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }

        mongoose.connect( connectString, {
            maxPoolSize: 50
        }).then( _ => {
            console.log(`Connected MongoDb success`, countConnect())
        })
        .catch(err => console.log('error connect !'))
    }

    static getInstance() {
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb