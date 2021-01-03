// Model
const AnimeModel = require('../../models/Animes')

// Class
const Anime = require('../query/Anime')

module.exports = async params => {
    const { id, name } = params
    const anime = new Anime(AnimeModel)

    let item = null

    if (id) {
        item = await anime.getById(id)
    }

    if (name) {
        item = await anime.getByName(name)
    }
    
    return {
        status: item !== null,
        item
    }
}