const axios = require('axios')
const asyncHandler = require('express-async-handler')



const recaptcha = asyncHandler(async (req, res, next) => {
  const { token } = req.body

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`
    )

    if (response.data.success) {
      next()
    } else {
      res.status(400)
      throw new Error('Verification result: Robot')
    }
  } catch (err) {
    res.status(500)
    throw new Error(err)
  }
})



module.exports = recaptcha