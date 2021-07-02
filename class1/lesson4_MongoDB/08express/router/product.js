//npm i shortid -s
import express from 'express';

import { getUsdToTwd } from '../utils.js'
import {
  createProduct,
  listProduct,
  findProduct,
  updateProduct,
  deleteProduct
} from '../repository/product.js'

const router = express.Router();
router.post('/', async (req, res) => {
  const { name, price } = req.body
  try {
    const product = await createProduct({
      name,
      price
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const products = await listProduct()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const { current } = req.query;
  try {
    let product = await findProduct(id)
    if (!!current) {
      res.json({
        id: product.id,
        name: product.name,
        price: `NT ${await calToTwd(product.price)}元`
      })
    } else {
      res.json({
        id: product.id,
        name: product.name,
        price: product.price
      })
    }
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await updateProduct(id,
      { ...req.body }
    )
    console.log(product)
    res.json('ok')
  } catch (err) {
    next(err)
  }
})
router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await deleteProduct(id)
    res.json('ok')
  } catch (err) {
    next(err)
  }
})


async function calToTwd(price) {
  const twd = await getUsdToTwd();
  return Math.round(price * twd)
}
export default router;