const { port } = require('./config')
const app = require('./app')

app.listen(port, () => {
  console.log(`The server is running on port ${port}!`)
})
