import mongoose from 'mongoose';

/**
 * Database: Database
 * Collection: table(schema)
 * Document: Record
 */

/***
 * sample
 * {
 *  name: "Mike",
 *  age: 25,
 *  obj: {
 *    filed1: "fdsafdsa"
 *  }
 * }
 */
const nestedObj = new mongoose.Schema({
  filed1: String
})

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  obj: nestedObj
});

const model = mongoose.model('user_model', UserSchema);

export default model 