# E-commerce Backend (NestJS + Prisma + SQLite)

## Getting Started

1. **Install dependencies:**
   ```bash
   cd ecommerce/backend
   npm install
   ```

2. **Set up your `.env` file:**
   ```
   DATABASE_URL="file:./dev.db"
   STRIPE_SECRET_KEY="sk_test_..."
   ```

3. **Initialize the database with Prisma:**
   ```bash
   npx prisma migrate dev --name init
   npx ts-node prisma/seed.ts
   ```

4. **Run the backend:**
   ```bash
   npm run start:dev
   ```

## Product API

- `GET /products` – List all products
- `GET /products/:id` – Get a single product by ID

---

Uses [Prisma](https://www.prisma.io/) as ORM, SQLite as database.