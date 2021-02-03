const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('@koa/cors')

const { ApolloServer } = require('apollo-server-koa')

const schema = require('./graphql/schema')

const app = new Koa()

app.use(koaBody())
app.use(cors())

const apollo = new ApolloServer({
  schema,
})

apollo.applyMiddleware({ app })

module.exports = app
