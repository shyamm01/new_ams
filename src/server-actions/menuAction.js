import { prisma } from "../../prisma/prisma";

// export const menuForSubscription = async (subscriptionPlanId) => {
//   const menu = await prisma.subscriptionMenuMapping.findMany({
//     where: {
//       subscriptionId: subscriptionPlanId, // ID of the subscription plan
//     },
//     select: {
//       menu: {
//         select: {
//           children: {
//             select: {
//               parentId: true,
//             },
//           },
//         },
//       },
//     },
//   });
//   return menu;
// };
