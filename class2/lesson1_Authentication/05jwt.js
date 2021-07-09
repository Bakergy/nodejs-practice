import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import { encryptPassword, comparePassword } from '../common/encrypt.js';
import { signJwt, verifyJwt } from '../common/jwt.js'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())

//here
async function tokenMiddleware(req, res, next) {
  const auth = req.headers['authorization'];
  try {
    if (typeof auth === 'undefined' && auth.split(' ')[0] !== 'Bearer') {
      throw new Error('token error')
    }
    const profile = await verifyJwt(auth.split(' ')[1])
    req.profile=profile
    next()
  } catch (err) {
    next(err)
  }
}

const user = {}

app.get('/user', (req, res) => {
  res.json(user)
})

app.post('/auth/signup', async (req, res, next) => {
  const { account, password } = req.body;
  try {
    user.account = account;
    user.password = await encryptPassword(password);
    res.json('ok')
  } catch (err) {
    next(err)
  }
})

app.post('/auth/login', async (req, res, next) => {
  const { account, password } = req.body;
  try {
    //error first!
    if (user.account !== account) {
      throw new Error('Can not find this account')
    }
    const isOk = await comparePassword(password, user.password)
    if (!isOk) {
      throw new Error('Auth error')
    }
    const jwt = await signJwt(account)//here
    res.json({token:jwt})
  } catch (err) {
    next(err)
  }
})

app.get('/auth/profile', tokenMiddleware, async (req, res, next) => {
  res.json(req.profile)//here
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


