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