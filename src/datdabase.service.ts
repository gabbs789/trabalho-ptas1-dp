import { PrismaClient } from '@prisma/client'


let prisma: PrismaClient

function getPrismaClient(): PrismaClient {
  if (!prisma) {
    prisma = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    })
  }
  return prisma
}

export const db = getPrismaClient()



export async function conectar(): Promise<void> {
  try {
    await db.$connect()
    console.log(' Conectado ao MongoDB com sucesso!')
  } catch (erro) {
    console.error(' Erro ao conectar ao MongoDB:', erro)
    throw erro
  }
}

export async function desconectar(): Promise<void> {
  try {
    await db.$disconnect()
    console.log(' Desconectado do MongoDB com sucesso!')
  } catch (erro) {
    console.error(' Erro ao desconectar do MongoDB:', erro)
    throw erro
  }
}



process.on('beforeExit', async () => {
  await desconectar()
})

process.on('SIGINT', async () => {
  await desconectar()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await desconectar()
  process.exit(0)
})
export type BaseEntity = {
  id: string
  createdAt: Date
  updatedAt: Date
}

export async function findAll<T>(model: any, orderBy: string = 'name'): Promise<T[]> {
  const records = await model.findMany({
    orderBy: { [orderBy]: 'asc' },
  })
  return records
}
