const express = require('express')
const router = express.Router()

router.get('/ajuda', (req, res, next) => {
  res.render('help')
})

module.exports = router
