// import { PrismaClient } from "@prisma/client";

// const client = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_ENV === "production") globalThis.prisma = client;

// export default client;

import { PrismaClient } from '@prisma/client'

// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices

let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
