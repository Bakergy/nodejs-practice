import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/v1', (req, res) => {
  res.send('v1')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})