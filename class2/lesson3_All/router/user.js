import express from 'express';

import { listUser } from '../repository/user.js'

const router = express.Router();

router.get('/', async (req, res,next) => {
  try {
    const users = await listUser()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

export default router;