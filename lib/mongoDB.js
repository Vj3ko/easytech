import mongoose from 'mongoose'

let isConnected = false

export const connectDB = async () => {
  if (isConnected) {
    console.log('DB already connected!')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)

    console.log('DB connected')
    isConnected = true
  } catch (error) {
    console.log('Error connecting to DB')
  }
}
