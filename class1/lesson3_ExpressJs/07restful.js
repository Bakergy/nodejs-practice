//npm install body-parser -s
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const products = { //todo
  "1626221214827": {
    "name": "Mike",
    "price": 50
  }
}

function findProductById(id) {
  if (!!products[id]) {
    return products[id];
  } else {
    throw new Error('user not found')
  }
}

app.post('/product', (req, res) => {
  const id=(+new Date()).toString()
  products[id]={
    ...req.body
  }
  res.json(products[id])
})

app.get('/product', (req, res) => {
  res.json(products)
})

app.get('/product/:id', (req, res, next) => {
  const id = req.params.id;
  try {
    const product = findProductById(id)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

app.patch('/product/:id', (req, res, next) => {
  const id = req.params.id;
  try {
    const product = findProductById(id)
    products[id]={
      ...products[id],
      ...req.body
    }
    res.json(products[id])
  } catch (err) {
    next(err)
  }
})

app.delete('/product/:id', (req, res, next) => {
  const id = req.params.id;
  try {
    const product = findProductById(id)
    delete products[id]
    res.json('ok')
  } catch (err) {
    next(err)
  }
})

app.get('*', function (req, res) {
  res.json({ err: '404 - Path Not Found' });
});

app.use(function (err, req, res, next) { //有error才進來
  res.status(400).json({ message: err.message || err });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})