import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Roles
  const adminRole = await prisma.role.create({
    data: {
      name: 'Admin',
      description: 'Administrator with full access',
    },
  });

  const userRole = await prisma.role.create({
    data: {
      name: 'User',
      description: 'Regular user with limited access',
    },
  });

  // Create Permissions
  const viewPermission = await prisma.permission.create({
    data: {
      value: 'VIEW',
      name: 'View Permission',
    },
  });

  const editPermission = await prisma.permission.create({
    data: {
      value: 'EDIT',
      name: 'Edit Permission',
    },
  });

  // Create Subscription Plans
  const basicSubscription = await prisma.subscription.create({
    data: {
      name: 'Basic',
      price: 10.0,
      duration: 30, // 30 days
      features: {
        canViewDashboard: true,
        canAccessChat: true,
      },
    },
  });

  const premiumSubscription = await prisma.subscription.create({
    data: {
      name: 'Premium',
      price: 30.0,
      duration: 30, // 30 days
      features: {
        canViewDashboard: true,
        canAccessChat: true,
        canAccessEvents: true,
      },
    },
  });

  // Create Menus
  const dashboardMenu = await prisma.menu.create({
    data: {
      name: 'Dashboard',
      url: '/dashboard',
      order: 1,
      icon: 'dashboard',
    },
  });

  const calendarMenu = await prisma.menu.create({
    data: {
      name: 'Calendar',
      url: '/calendar',
      order: 2,
      icon: 'calendar',
    },
  });

  const chatMenu = await prisma.menu.create({
    data: {
      name: 'Chat',
      url: '/chat',
      order: 3,
      icon: 'chat',
    },
  });

  const eventsMenu = await prisma.menu.create({
    data: {
      name: 'Events',
      url: '/events',
      order: 4,
      icon: 'events',
    },
  });

  // Create Menu Mappings for Subscriptions
  await prisma.subscriptionMenuMapping.create({
    data: {
      subscriptionId: basicSubscription.id,
      menuId: dashboardMenu.id,
    },
  });

  await prisma.subscriptionMenuMapping.create({
    data: {
      subscriptionId: basicSubscription.id,
      menuId: chatMenu.id,
    },
  });

  await prisma.subscriptionMenuMapping.create({
    data: {
      subscriptionId: premiumSubscription.id,
      menuId: dashboardMenu.id,
    },
  });

  await prisma.subscriptionMenuMapping.create({
    data: {
      subscriptionId: premiumSubscription.id,
      menuId: chatMenu.id,
    },
  });

  await prisma.subscriptionMenuMapping.create({
    data: {
      subscriptionId: premiumSubscription.id,
      menuId: eventsMenu.id,
    },
  });

  // Create Users
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      username: 'admin',
      email: 'admin@example.com',
      password: 'adminpassword',
      subscriptionId: premiumSubscription.id,
      UserMenuPermission: {
        create: [
          {
            menuId: dashboardMenu.id,
            permission: {
              connect: { id: viewPermission.id },
            },
          },
          {
            menuId: eventsMenu.id,
            permission: {
              connect: { id: editPermission.id },
            },
          },
        ],
      },
    },
  });

  const regularUser = await prisma.user.create({
    data: {
      name: 'Regular User',
      username: 'user',
      email: 'user@example.com',
      password: 'userpassword',
      subscriptionId: basicSubscription.id,
      UserMenuPermission: {
        create: [
          {
            menuId: dashboardMenu.id,
            permission: {
              connect: { id: viewPermission.id },
            },
          },
        ],
      },
    },
  });

  // Assign Menu Roles
  await prisma.menuItemRole.create({
    data: {
      roleId: adminRole.id,
      menuItemId: dashboardMenu.id,
    },
  });

  await prisma.menuItemRole.create({
    data: {
      roleId: adminRole.id,
      menuItemId: eventsMenu.id,
    },
  });

  await prisma.menuItemRole.create({
    data: {
      roleId: userRole.id,
      menuItemId: dashboardMenu.id,
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
