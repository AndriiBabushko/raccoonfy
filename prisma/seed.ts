import { Prisma, PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const password = await hash("12345", 12);
  const user = await prisma.user.upsert({
    where: { email: "vt211_bas@student.ztu.edu.ua" },
    update: {},
    create: {
      email: "vt211_bas@student.ztu.edu.ua",
      name: "Andrii",
      surname: "Babushko",
      password,
    },
  });

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
