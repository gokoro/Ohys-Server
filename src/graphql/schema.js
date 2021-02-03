const { makeExecutableSchema, gql } = require('apollo-server-koa')
const { DateResolver } = require('graphql-scalars')
const merge = require('lodash/merge')

const anime = require('./anime')
const timetable = require('./timetable')

const typeDefs = gql`
  scalar Date

  type Query {
    _version: String
  }
`

const resolvers = {
  Date: DateResolver,

  Query: {
    _version: () => 'v1.0',
  },
}

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, anime.typeDefs, timetable.typeDefs],
  resolvers: merge(resolvers, anime.resolvers, timetable.resolvers),
})

module.exports = schema
