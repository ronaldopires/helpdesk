const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()

app.use(express.static(path.join(__dirname, 'views')))

app.listen(process.env.port || 8081, () => {
  console.log('Server on 8081')
})
