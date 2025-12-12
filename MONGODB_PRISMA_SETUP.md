
```
DATABASE_URL="mongodb://localhost:27017/ptas1-db"
NODE_ENV="development"
```


```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id    String  @id @default(auto()) @map("_id") @db.ObjectId
  name  String
  email String  @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Pet {
  id        String  @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  species   String
  age       Int
  vaccinated Boolean? @default(false)
  breed     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```


```typescript
