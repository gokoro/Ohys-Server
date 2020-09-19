const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('@koa/cors')

const router = require('./api')

const app = new Koa()

app.use(koaBody())
app.use(cors())
app.use(router.routes())

module.exports = app
