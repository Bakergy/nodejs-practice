//npm install body-parser -s
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';

import product from './router/product.js'

const uri = "mongodb+srv://admin:w2KGU8WfHAmrzt5n@bakergycluster.2t1dj.mongodb.net/Bakergy?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/product', product);

app.use(function (err, req, res, next) { //有error才進來
  res.status(400).json({ message: err.message || err });
});

app.get('*', function (req, res) {
  res.json({ err: '404 - Path Not Found' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})