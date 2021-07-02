/**basic */
// function sleep(sec) {
//   return new Promise((resolve, reject) => setTimeout(() => { resolve(sec) }, sec * 1000));
// }
// async function main() {
//   console.log("start")
//   const val = sleep(3)
//   // const val = await sleep(3)
//   console.log('result:', val)
// }
// main()

/**try...catch... */

function sleep(sec) {
  return new Promise((resolve, reject) => setTimeout(() => {
    // resolve(sec)
    reject(new Error('error!'))
  }, sec * 1000));
}

async function main() {
  console.log("start")
  try {
    const val = await sleep(3)
    console.log('result:', val)
  } catch (e) {
    console.log("An error occurred but no effect")
  }
}
main()