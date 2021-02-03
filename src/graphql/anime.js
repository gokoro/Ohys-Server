const { gql } = require('apollo-server-koa')

const AnimeModel = require('../models/Animes')
const Anime = require('../services/query/Anime')

module.exports.typeDefs = gql`
  type Anime {
    _id: ID!
    name: String
    title: AnimeTitle
    imageUrl: String
    bannerImage: String
    color: String
    season: String
    released_year: String
    description: String
    released_time: String
    release_broadcaster: String
    episode_info: [AnimeEpisodeInfo]
    items: [AnimeItems]
  }

  type AnimeTitle {
    romaji: String
    japanese: String
    english: String
    korean: String
    as: String
  }

  type AnimeEpisodeInfo {
    title: String
    thumbnail: String
  }

  type AnimeItems {
    _id: ID!
    episode: Int
    link: String
    resolution: String
    audioFormat: String
    videoFormat: String
    broadcaster: String
    original: String
    hash: String
    created_at: Date
  }

  extend type Query {
    anime(id: ID, name: String): Anime
  }
`

module.exports.resolvers = {
  Query: {
    anime: async (parent, { id, name }) => {
      const anime = new Anime(AnimeModel)

      if (id) {
        return await anime.getById(id)
      }

      if (name) {
        return await anime.getByName(name)
      }
    },
  },
}
