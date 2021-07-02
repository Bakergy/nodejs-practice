// npm i axios -s
import axios from "axios";

//https://tw.rter.info/howto_currencyapi.php
async function main() {
  const uri = 'https://tw.rter.info/capi.php'
  const res = await axios({
    method: 'GET',
    url: uri
  })
  const { Exrate, UTC } = res.data.USDTWD
  console.log('usd to twd:', Exrate)
}
main()