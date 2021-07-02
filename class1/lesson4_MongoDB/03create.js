import { dbCon } from './01connect.js'
import User from './02schema.js'

async function main() {
  const user = await User.create({
    name: 'Mike',
    age: 25,
    obj: {
      filed1: "Hello World"
    }
  })
  console.log(user)
}
main()