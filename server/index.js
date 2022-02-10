require('dotenv').config()
const express = require('express')
const app = express()

const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})
rollbar.log("Hello world!");
app.use(express.json());
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, () => console.log(`Server running on ${port}`))