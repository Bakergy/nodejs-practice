import { dbCon } from './01connect.js'
import User from './02schema.js'

async function main() {
  const user = await User.updateOne(
    { name: 'Mike' },  //filter
    { $set: { age: 20 } }) //update
  console.log(user)
}
main()