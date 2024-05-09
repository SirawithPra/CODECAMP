const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('No user')
})
router.get('/first', function (req, res) {
  res.send('first on user')
})

router.get('/second', function (req, res) {
  res.send('second on user')
})

module.exports = router