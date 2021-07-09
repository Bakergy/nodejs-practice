import User from '../model/user.js'
import { genId } from '../common/genId.js'

async function createUser(dto) {
  try {
    const user = await User.create({
      id: genId(),
      account: dto.account,
      password: dto.password,
      name: dto.name,
      email: dto.email
    })
    return toUser(user)
  } catch (err) {
    console.log(err.stack)
    throw new Error('unknow error')
  }
}

async function listUser() {
  try {
    const users = await User.find({})
    return users.map(p => toUser(p));
  } catch (err) {
    throw new Error('unknow error')
  }
}

async function findUserByAccount(account) {
  try {
    let user = await User.findOne({ account: account })
    if (!!user) {
      return user
    } else {
      throw new Error('User not found')
    }
  } catch (err) {
    throw new Error(err)
  }
}

function toUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    account:user.accountss
  }
}

export {
  createUser,
  listUser,
  findUserByAccount,
}