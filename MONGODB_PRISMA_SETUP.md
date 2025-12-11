# Implementação MongoDB + Prisma

## Instalação Concluída ✅

### 1. Dependências Instaladas
- `@prisma/client`: Cliente Prisma para operações com banco de dados
- `prisma`: CLI Prisma para gerenciar migrações e schema

### 2. Arquivo `.env` Criado
```
DATABASE_URL="mongodb://localhost:27017/ptas1-db"
NODE_ENV="development"
```

> **Importante:** Ajuste a `DATABASE_URL` se usar MongoDB Atlas (nuvem) em vez de local.

### 3. Schema Prisma (`prisma/schema.prisma`)
Criado com dois modelos:
- **User**: id, name, email, createdAt, updatedAt
- **Pet**: id, name, species, age, vaccinated, breed, createdAt, updatedAt

### 4. Services Atualizados
- ✅ `src/services/users.service.ts` - Agora usa Prisma/MongoDB
- ✅ `src/services/pets.service.ts` - Agora usa Prisma/MongoDB

## Próximos Passos

### MongoDB Local (se ainda não instalado)
```powershell
# Via Chocolatey no Windows
choco install mongodb

# Ou use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
```

### Primeiras Migrações
```powershell
npx prisma db push
```

### Gerar Prisma Client
```powershell
npx prisma generate
```

### Testes
```powershell
npm run dev  # Iniciar servidor
```

## Scripts Úteis para package.json (OPCIONAL)
Você pode adicionar estes scripts ao seu `package.json`:

```json
"prisma:migrate": "prisma migrate dev --name init",
"prisma:generate": "prisma generate",
"prisma:studio": "prisma studio"
```

## Observações Importantes

1. **Modelo User**: Pode adicionar campos extras como `phone`, `role`, etc.
2. **Validações**: As validações Zod continuam nos validators
3. **Controllers**: Devem continuar usando as funções dos services sem mudanças
4. **Erros**: Trate erros do Prisma nos controllers (ex: `PrismaClientKnownRequestError`)

## Documentação
- Prisma: https://www.prisma.io/docs/
- MongoDB: https://www.mongodb.com/docs/
