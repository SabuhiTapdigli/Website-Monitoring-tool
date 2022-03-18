const express = require('express')
const { getwebsites, deletewebsite } = require('../controllers/website_controller')
const router = express.Router()

router.get('/websites',getwebsites)
router.delete('/delete/:id',deletewebsite)

module.exports = router