const Router = require('koa-router')

const router = new Router()

const service = require('../../services')

router.get('/', async (ctx) => {
    const animeDTO = ctx.request.query

    const { status, item } = await service.anime(animeDTO)

    if (!status) {
        ctx.response.status = 400
    }
    return ctx.body = {
        status,
        requestedParam: animeDTO,
        data: item
    }
})

module.exports = router