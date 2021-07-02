import pkg from 'shortid';
import axios from "axios";
const { generate } = pkg;
export function genId() {
  return generate();
}

export async function getUsdToTwd(){
  const uri = 'https://tw.rter.info/capi.php'
  const res = await axios({
    method: 'GET',
    url: uri
  })
  const { Exrate, UTC } = res.data.USDTWD
  return Exrate
}