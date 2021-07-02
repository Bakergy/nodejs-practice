//npm i morgan -s
import express from 'express'
import morgan from 'morgan'
const app = express()
const port = 3000

app.use(morgan('dev'))
// app.use((req, res, next) => {
//   console.log('welcome', new Date().toISOString())
//   next() //重點
// })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})