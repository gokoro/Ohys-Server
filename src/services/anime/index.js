// Model
const AnimeModel = require('../../models/Animes')

// Class
const Anime = require('../query/Anime')

module.exports = async params => {
    const { id } = params
    const anime = new Anime(AnimeModel)

    const item = await anime.getById(id)

    return {
        status: item !== null,
        item
    }
}