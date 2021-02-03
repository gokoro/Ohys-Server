const { port } = require('./config')
const db = require('./loaders/mongoose')
const app = require('./app')

const main = async () => {
  await db.connect()

  app.listen(port, () => {
    console.log(`The server is running on port ${port}!`)
  })
}

main()
