import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed with one sample product
  await prisma.product.createMany({
    data: [
      {
        name: 'Vintage Keychain 1',
        description: 'Classic retro design.',
        price: 1500,
        imageUrl: 'https://example.com/keychain1.jpg',
        inventory: 10,
      },
      {
        name: 'Vintage Keychain 2',
        description: 'Rare collectible item.',
        price: 2500,
        imageUrl: 'https://example.com/keychain2.jpg',
        inventory: 5,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });