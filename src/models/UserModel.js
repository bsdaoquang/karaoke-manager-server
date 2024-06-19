import mongoose, { Schema } from "mongoose";

const UserScheme = new Schema({
  username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const UserModel = mongoose.model('users', UserScheme)
export default UserModel