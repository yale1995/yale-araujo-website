import { PrismaClient } from '@prisma/client'

export const prisma =
  global.prismadb ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV === 'production') global.prismadb = prisma
