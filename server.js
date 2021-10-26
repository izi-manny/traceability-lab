const express = require('express')
const app = express()
const Rollbar = require('rollbar') // has to be capitalized because it's a Class

let rollbar = new Rollbar({
    accessToken: '20697aa719644499b8d17e035b215f3a',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const path = require('path')

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    // rollbar.info('html file served successfully')
})

app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/styles.css'))
})