import {  verifyJwt } from '../common/jwt.js'

export async function tokenMiddleware(req, res, next) {
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