import prisma from 'app/libs/prismadb'
import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials

        const user = await prisma.user.findUnique({ where: { email } })

        if (!user) {
          throw new Error('No user with this email')
        }

        const passMatching = await compare(password, user.password)

        if (!passMatching) {
          throw new Error('Incorrect credentials')
        }

        return user
      },
    }),
  ],
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
