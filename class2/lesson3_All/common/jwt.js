// npm i jsonwebtoken -s
import jwt from 'jsonwebtoken'

const secret = 'hello_wrold'
const expireTime = 60//sec

export async function signJwt(acc) {
  try {
    const token = await jwt.sign({ acc, name: 'hello' }, secret, { expiresIn: expireTime })
    return token;
  } catch (err) {
    throw new Error('jwt sign error')
  }
}

export async function verifyJwt(toke) {
  try {
    const profile=await jwt.verify(toke, secret);
    return profile;
  } catch (err) {
    throw new Error('jwt verify error')
  }

}