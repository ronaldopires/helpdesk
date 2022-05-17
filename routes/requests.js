const express = require('express')
const router = express.Router()

router.get('/chamados', (req, res, next) => {
  res.render('requests')
})

module.exports = router
