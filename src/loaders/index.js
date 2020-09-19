const koaLoader = require('./koa')
const mongooseLoader = require('./mongoose')
const logger = require('./logger')

module.exports = async app => {
    // await mongooseLoader()
    // logger.info('Mongoose has been loaded successfully!')

    await koaLoader(app)
    logger.info('Koa has been loaded successfully!')
}