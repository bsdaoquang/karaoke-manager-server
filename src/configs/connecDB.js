/** @format */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


const dbUrl = `mongodb+srv://bsdaoquangyhocso:${process.env.DATABASE_PASSWORD}@cluster0.hulooqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connecDB = async() => {
  try {
    const connection = await mongoose.connect(dbUrl)
    console.log(`Connect to database successfully!!`)
  } catch (error) {
    console.log(error)
    process.exit(1) // Tắt quá trình kết nối
  }
}

export default connecDB