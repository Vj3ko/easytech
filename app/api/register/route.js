import bcrypt from 'bcryptjs'
import { connectDB } from 'lib/mongoDB'
import User from 'models/userModel'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { email, name, password } = await req.json()

  try {
    await connectDB()

    const isEmailRegistered = await User.findOne({ email })
    const isUserRegistered = await User.findOne({ name: name.toLowerCase() })

    if (isEmailRegistered)
      return NextResponse.json(
        { message: 'Email is already in use' },
        { status: 500 }
      )

    if (isUserRegistered)
      return NextResponse.json(
        { message: 'User with this username already exist' },
        { status: 500 }
      )

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      name: name.toLowerCase(),
      email,
      password: hashedPassword,
    })
    await newUser.save()

    return NextResponse.json(
      { message: 'User registered successfully. Logging in...' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'User failed to register' },
      { status: 500 }
    )
  }
}
