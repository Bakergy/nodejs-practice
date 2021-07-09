import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())

const user = {}

app.get('/user', (req, res) => {
  res.json(user)
})

app.post('/auth/signup', async (req, res, next) => {
  const { account, password } = req.body;
  try {
    user.account = account;
    user.password = password;
    res.json('ok')
  } catch (err) {
    //express 不支援async function throw error
    //https://stackoverflow.com/questions/51391080/handling-errors-in-express-async-middleware
    next(err)
  }
})

app.use(function (err, req, res, next) { //有error才進來
  res.status(500).json({ message: err.message || err });
});

app.use(function (req, res) {
  res.status(404);
  res.json({ err: '404 - Path Not Found' });
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


