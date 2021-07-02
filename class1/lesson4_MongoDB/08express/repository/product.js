import Product from '../model/productModel.js'
import { genId } from '../utils.js'

async function createProduct(dto) {
  try {
    const product = await Product.create({
      id: genId(),
      name: dto.name,
      price:dto.price
    })
    return toProduct(product)
  } catch (err) {
    throw new Error('unknow error')
  }
}

async function listProduct() {
  try {
    const products = await Product.find({})
    console.log(products)
    return products.map(p => toProduct(p));
  } catch (err) {
    throw new Error('unknow error')
  }
}

async function findProduct(id) {
  try {
    let product = await Product.findOne({ id: id })
    if (!!product) {
      return toProduct(product)
    } else {
      throw new Error('Product not found')
    }
  } catch (err) {
    throw new Error(err)
  }
}

async function updateProduct(id,dto) {
  try {
    const product = await Product.updateOne(
      { id: id },
      { ...dto }
    )
    return toProduct(product)
  } catch (err) {
    next(err)
  }
}

async function deleteProduct(id){
  try {
    await Product.deleteOne(
      { id: id },  //filter
    )
  } catch (err) {
    next(err)
  }
}


function toProduct(product) {
  return {
    id: product.id,
    name: product.name,
    price: product.price
  }
}

export {
  createProduct,
  listProduct,
  findProduct,
  updateProduct,
  deleteProduct
}