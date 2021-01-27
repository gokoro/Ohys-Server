const mongoose = require('mongoose')
const config = require('../config')

module.exports.connect = async () => {
  return await mongoose.connect(config.database_host, {
    useNewUrlParser: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    dbName: config.database_name,
  })
}

module.exports.close = async () => {
  return await mongoose.connection.close()
}
