const serverless = require('serverless-http')

const app = require('./app')
const mongooseLoader = require('./loaders/mongoose')

const serverlessApp = serverless(app)
let connection = null

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false

    if (connection === null) {
        connection = await mongooseLoader.connect()
    }

    await connection

    const response = await serverlessApp(event, context)

    return response
}