require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.API_PORT
const cors = require('cors')
const path = require('path')
const cors_config = require('./config/cors')
const errorHandler = require('./middlewares/error')

app.use(cors(cors_config()))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



const recordRoutes = require('./routes/recordRoutes')

app.use('/api/slp-client-app/csjdm/cswdo', recordRoutes)

const recaptcha = require('./middlewares/recaptcha')

app.post('/api/slp-client-app/csjdm/cswdo/verify/token', recaptcha, async(req, res) => {
  res.status(200).send('Success')
})



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}

app.use(errorHandler)

app.listen(port, () => console.log(`SLP Client Server running on port: ${port}`))