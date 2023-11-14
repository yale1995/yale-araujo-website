import { PrismaAdapter } from '@/lib/auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  debug: true,
  adapter: PrismaAdapter(),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // the profile function works to rename all data provided by google
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          username: profile.email,
          avatar_url: profile.picture,
          email: profile.email,
        }
      },
    }),
  ],
  callbacks: {
    // by default on next auth session only is returned {name, email}, but now is going being returned all data user: {name, email, avatar_url}
    async session({ session, user }) {
      return {
        ...session,
        user,
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
