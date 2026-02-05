// lib/db.js
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  // We removed the adapter and the hardcoded 'file:' path.
  // Prisma 7 will now automatically use the DATABASE_URL from your .env
  return new PrismaClient();
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;