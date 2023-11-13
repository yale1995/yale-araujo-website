import { PrismaClient } from '@prisma/client'

export const prisma = global.prismadb || new PrismaClient()

if (process.env.NODE_ENV === 'production') global.prismadb = prisma
