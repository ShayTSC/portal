const express = require('express')
const cloudscraper = require('cloudscraper')
const app = express()
const port = 3030

app.get('/portal', (req, res) => {
  cloudscraper.get(req.query.url)
    .then((response) => {
      res.send(response)
    }, console.error)
})

app.listen(port, () => {
  console.log(`Portal app listening at http://localhost:${port}`)
})