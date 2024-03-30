import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // COLORS
  await prisma.phoneColor.createMany({
    data: [
      { name: 'black' },
      { name: 'white' },
      { name: 'silver' },
      { name: 'gold' },
      { name: 'blue' },
      { name: 'red' },
      { name: 'purple' },
      { name: 'yellow' },
      { name: 'orange' },
      { name: 'green' },
      { name: 'pink' },
    ],
  });
  // BRANDS
  await prisma.phoneBrand.createMany({
    data: [
      { name: 'Samsung' },
      { name: 'Apple' },
      { name: 'Xiaomi' },
      { name: 'Oppo' },
      { name: 'Vivo' },
      { name: 'Realme' },
      { name: 'Motorola' },
      { name: 'Huawei' },
      { name: 'Transsion' },
      { name: 'Honor' },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
