const express = require('express')
const router = express.Router()

router.get('/meus-chamados', (req, res, next) => {
  res.render('my-requests')
})

module.exports = router
