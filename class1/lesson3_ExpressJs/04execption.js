import express from 'express'
import morgan from 'morgan'
const app = express()
const port = 3000

app.use(morgan('dev'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/err1', (req, res, next) => {
  throw new Error('err1')
})

app.get('/err2', (req, res, next) => {
  next(new Error('err2'))
})

app.use(function (err, req, res, next) { //有error才進來
  res.status(500).json({ message: err.message || err });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})