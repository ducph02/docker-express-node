const express = require('express')
const app = express()

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Hello Docker',
  })
})

app.listen(port, () => {
  console.log(`App is running at http://${host}:${port}`)
})
