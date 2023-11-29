import prisma from 'app/libs/prismadb'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { email, name, password } = await req.json()

  try {
    // Check if user with provided email already exist
    const isUserRegistered = await prisma.user.findUnique({ where: { email } })
    if (isUserRegistered)
      return NextResponse.json(
        { message: 'Email is already in use' },
        { status: 500 }
      )

    //Hash a provided password
    const hashedPassword = await bcrypt.hash(password, 10)

    //Create a user in a database
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      { message: 'User registered successfully!' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'User failed to register' },
      { status: 500 }
    )
  }
}
