const logger = require('./logger')
const router = require('../api')
const koaBody = require('koa-body')

const koa = app => {
    // Logger
    app.use(async (ctx, next) => {
        await next()
        const rt = ctx.response.get('X-Response-Time')
        logger.debug(`${ctx.method} ${ctx.url} - ${rt}`)
    })

    // Body Parser
    app.use(koaBody())

    // Router
    app.use(router.routes())

}
module.exports = koa