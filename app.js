const express = require('express')
const app = express()
const path = require('path')
const APP_PORT = 1234

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index')
})
app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`)
})