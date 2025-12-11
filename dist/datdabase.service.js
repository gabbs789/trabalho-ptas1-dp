"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
exports.conectar = conectar;
exports.desconectar = desconectar;
exports.findAll = findAll;
const client_1 = require("@prisma/client");
let prisma;
function getPrismaClient() {
    if (!prisma) {
        prisma = new client_1.PrismaClient({
            log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
        });
    }
    return prisma;
}
exports.db = getPrismaClient();
async function conectar() {
    try {
        await exports.db.$connect();
        console.log(' Conectado ao MongoDB com sucesso!');
    }
    catch (erro) {
        console.error(' Erro ao conectar ao MongoDB:', erro);
        throw erro;
    }
}
async function desconectar() {
    try {
        await exports.db.$disconnect();
        console.log(' Desconectado do MongoDB com sucesso!');
    }
    catch (erro) {
        console.error(' Erro ao desconectar do MongoDB:', erro);
        throw erro;
    }
}
process.on('beforeExit', async () => {
    await desconectar();
});
process.on('SIGINT', async () => {
    await desconectar();
    process.exit(0);
});
process.on('SIGTERM', async () => {
    await desconectar();
    process.exit(0);
});
async function findAll(model, orderBy = 'name') {
    const records = await model.findMany({
        orderBy: { [orderBy]: 'asc' },
    });
    return records;
}
//# sourceMappingURL=datdabase.service.js.map