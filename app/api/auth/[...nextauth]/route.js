import { compare } from 'bcryptjs'
import { connectDB } from 'lib/mongoDB'
import User from 'models/userModel'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { name, password } = credentials

        try {
          await connectDB()
          const user = await User.findOne({ name: name.toLowerCase() })

          if (!user) return null

          const passMatching = await compare(password, user.password)

          if (!passMatching) return null

          return user
        } catch (error) {
          console.error('Error during authorization: ', error)
        }

        return null
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (session) {
        const sessionUser = await User.findOne({ email: session.user.email })
        session.user.id = sessionUser._id.toString()
        return session
      }
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/authentication',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
