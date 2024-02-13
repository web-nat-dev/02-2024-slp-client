const express = require('express')
const router = express.Router()
const {
  SubmitApplication,
  ViewApplicationStatus,
  SubmitFeedback
} = require('../controllers/recordController')



router.route('/').post(SubmitApplication)
router.route('/:id').get(ViewApplicationStatus).post(SubmitFeedback)



module.exports = router