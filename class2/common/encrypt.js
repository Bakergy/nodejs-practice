// npm i bcrypt -s
import bcrypt from 'bcrypt';

export async function encryptPassword(password) {
  try{
    const hash=await bcrypt.hash(password, 10);
    return hash
  }catch(err){
    throw new Error(err.message)
  }

}

export async function comparePassword(password, hashPassword) {
  try{
    const isOk=await  bcrypt.compare(password, hashPassword);
    return isOk
  }catch(err){
    throw new Error(err.stack)
  }
}