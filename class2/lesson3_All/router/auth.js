import express from 'express';

import { encryptPassword, comparePassword } from '../common/encrypt.js';
import { signJwt } from '../common/jwt.js'
import {tokenMiddleware} from '../middleware/token.js'
import {createUser,findUserByAccount} from '../repository/user.js'
import {sendMail} from '../common/mail.js'

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  const { account, password,name,email } = req.body;
  try {
    const user={
      account,
      password: await encryptPassword(password),
      name,
      email
    }
    await createUser(user)
    
    await sendMail(email)
    res.json('Congratulations! we will send an email to wilcome you.')
  } catch (err) {
    next(err)
  }
})

router.post('/login', async (req, res, next) => {
  const { account, password } = req.body;
  try {
    const user=await findUserByAccount(account);
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

router.get('/profile', tokenMiddleware, async (req, res, next) => {
  res.json(req.profile)//here
})

export default router;