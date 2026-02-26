import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 seeding roles...');
  await prisma.role.createMany({
    data: [{ name: 'ADMIN' }, { name: 'USER' }, { name: 'PROVIDER' }],
    skipDuplicates: true,
  });

  console.log('✅ Roles created successfully');
}

main()
  .catch((error) => {
    console.error('⚠️ seed failed', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
