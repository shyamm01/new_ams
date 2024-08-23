import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {


  // Create Users
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      username: 'admin',
      email: 'admin@example.com',
      password: 'adminpassword',
      subscriptionId: 2,
      roleId:4,
    },
  });

  const regularUser = await prisma.user.create({
    data: {
      name: 'Regular User',
      username: 'user',
      email: 'user@example.com',
      password: 'userpassword',
      subscriptionId: 1,
      roleId:5
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
