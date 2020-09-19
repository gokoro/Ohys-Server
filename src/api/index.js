const Router = require('koa-router')
const scheduleRouter = require('./routes/schedule')
const animeRouter = require('./routes/anime')

const router = new Router()

router.use('/schedule', scheduleRouter.routes())
router.use('/anime', animeRouter.routes())

module.exports = router