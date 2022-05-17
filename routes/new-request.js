const express = require('express')
const router = express.Router()

router.get('/novo-chamado', (req, res, next) => {
  res.render('new-request')
})

module.exports = router
