import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  account: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  email:{ type: String, required: true },
});

const model = mongoose.model('user_model', UserSchema);

export default model;