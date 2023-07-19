import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const userData: Prisma.UserCreateInput[] = [
  {
    username: "AndriiRaccoon",
    email: "andriibabushko@gmail.com",
  },
  {
    username: "AndriiBabushko",
    email: "vt211_bas@student.ztu.edu.ua",
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit();
  });
