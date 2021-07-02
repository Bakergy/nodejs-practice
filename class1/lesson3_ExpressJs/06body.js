//npm install body-parser -s
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(morgan('dev'))

// /* body parse */
// // parse application/json
// app.use(bodyParser.json())
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/body', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})