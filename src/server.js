const { port } = require('./config')
const db = require('./loaders/mongoose')
const app = require('./app')

db.connect()

app.listen(port, () => {
  console.log(`The server is running on port ${port}!`)
})
