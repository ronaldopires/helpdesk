const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.get('/cadastro', (req, res, next) => {
  res.render('register')
})
router.post('/cadastro', async (req, res) => {
  try {
    const user = await User.create(req.body)
    return res.send({ User })
  } catch {}
})

module.exports = router
