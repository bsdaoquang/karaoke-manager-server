import UserModel from '../models/UserModel.js';
import bcrypt from 'bcrypt';

const register = async (req, res) => {
  const data = req.body
  const {username, password} = data

  try {
    // Kiểm tra xem username có tồn tại hay chưa?
    const existingUser = await UserModel.findOne({username})

    if (existingUser) {
      throw new Error('Existing user')
    }

    const salt = await bcrypt.genSalt(10)
    const hashPasswod = await bcrypt.hash(password, salt)

    const newUser =  UserModel({
      username,
      password: hashPasswod
    })

   await newUser.save()

    res.status(200).json({
      message: 'fafafa',
      data: {
        _id: newUser._id,
        username,
        createdAt: newUser.createdAt
      }
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}
const login = async (req, res) => {
  const data = req.body
  const {username, password} = data

  try {
    // Kiểm tra xem username có tồn tại hay chưa?
    const existingUser = await UserModel.findOne({username})

    if (!existingUser) {
      throw new Error('User not found!')
    }
    
    const isMatchPassword = await bcrypt.compare(password, existingUser.password)

    if (!isMatchPassword) {
      throw new Error('Username/Password is not correct')
    }


    res.status(200).json({
      message: 'fafafa',
      data: {
        _id: existingUser._id,
        username,
        createdAt: existingUser.createdAt
      }
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}

export {
  register,
  login
}