const { gql } = require('apollo-server-koa')

const Timetable = require('../services/query/Timetable')
const TimetableModel = require('../models/Timetables')

module.exports.typeDefs = gql`
  extend type Query {
    timetable(day: String): [Anime]
  }
`

module.exports.resolvers = {
  Query: {
    timetable: async (parent, { day }) => {
      const timetable = new Timetable(TimetableModel)

      const res = await timetable.getByDay(day)

      return res.animes
    },
  },
}
