const asyncHandler = require('express-async-handler')
const Records = require('../models/Records')



const SubmitApplication = asyncHandler(async (req, res) => {
  try{
    res.status(200).json({
      success: true,
      route: 'Submit Application'
    })
  } catch(err) {
    console.error(err)
    res.status(500)
    throw new Error(err)
  }
})

const ViewApplicationStatus = asyncHandler(async (req, res) => {
  try{
    res.status(200).json({
      success: true,
      route: 'View Application Status'
    })
  } catch(err) {
    console.error(err)
    res.status(500)
    throw new Error(err)
  }
})

const SubmitFeedback = asyncHandler(async (req, res) => {
  try{
    res.status(200).json({
      success: true,
      route: 'Submit Feedback'
    })
  } catch(err) {
    console.error(err)
    res.status(500)
    throw new Error(err)
  }
})



module.exports = {
  SubmitApplication,
  ViewApplicationStatus,
  SubmitFeedback
}