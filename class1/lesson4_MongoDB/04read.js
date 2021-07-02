import { dbCon } from './01connect.js'
import User from './02schema.js'

async function main() {
  const users = await User.find({})
  console.log(users)
}
main()