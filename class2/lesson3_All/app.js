import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';

const uri = "mongodb+srv://admin:w2KGU8WfHAmrzt5n@bakergycluster.2t1dj.mongodb.net/Bakergy?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

import userRouter from './router/user.js';
import authRouter from './router/auth.js';

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.json('ok')
})
app.use('/user', userRouter);
app.use('/auth', authRouter);

app.use(function (err, req, res, next) { //有error才進來
  console.log(err.message || err);
  res.status(500).json({ message: err.message || err });
});

app.use(function (req, res) {
  res.status(404);
  res.json({ err: '404 - Path Not Found' });
});

app.listen(process.env.PORT || port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


