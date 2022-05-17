const express = require('express')
const router = express.Router()

router.get('/meu-perfil', (req, res, next) => {
  res.render('profile')
})

module.exports = router
