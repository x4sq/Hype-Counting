const { reconDB } = require('reconlx')

const db = new reconDB({
    uri: process.env.MONGODB_SRV
})

module.exports = db;