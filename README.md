# API Catálogo de Filmes (TypeScript + Express)

Projeto simples seguindo padrão MVC, com validação via Zod e persistência em arquivo JSON.

## Requisitos
- Node.js 18+

## Instalação
```bash
npm install
```

## Scripts
- `npm run dev` – Inicia em desenvolvimento com ts-node-dev
- `npm run build` – Compila TypeScript para `dist/`
- `npm start` – Executa a versão compilada
- `npm test` – Roda testes com Vitest

## Variáveis de Ambiente
Crie um arquivo `.env` (opcional):
```
PORT=3000
```

## Estrutura
```
src/
  controllers/
  models/
  routes/
  services/
  storage/
  validators/
```

## Endpoints
Base: `/api/movies`

- GET `/` – lista filmes
- GET `/:id` – busca por id
- POST `/` – cria
  body:
  {
    "title": "string",
    "year": 2024,
    "genre": "string",
    "rating": 7.5 // opcional
  }
- PUT `/:id` – atualiza parcial/total (mesmo schema do POST, campos opcionais)
- DELETE `/:id` – remove

Health check: `GET /health`

## Execução
```bash
npm run dev
# em outra aba, teste
curl http://localhost:3000/health
curl -X POST http://localhost:3000/api/movies -H "Content-Type: application/json" -d '{"title":"Inception","year":2010,"genre":"Sci-Fi","rating":9}'
```

## Testes
Testes de exemplo com Supertest/Vitest localizados em `tests/`.

## Licença
ISC
