const express = require('express')
const router = express.Router()

router.get('/cadastro', (req, res, next) => {
  res.render('register')
})

module.exports = router
