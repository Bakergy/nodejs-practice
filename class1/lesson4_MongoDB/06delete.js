import { dbCon } from './01connect.js'
import User from './02schema.js'

async function main() {
  const user = await User.deleteOne(
    { name: 'Mike' },  //filter
  )
  console.log(user)
}
main()