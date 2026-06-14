import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function createUser({
  name,
  email,
  password,
}) {
  const existingUser =
    await prisma.user.findUnique({
      where: { email },
    });

  if (existingUser) {
    throw new Error(
      "User already exists"
    );
  }

  const hashedPassword =
    await bcrypt.hash(
      password,
      10
    );

  const user =
    await prisma.user.create({
      data: {
        name,
        email,
        password:
          hashedPassword,
      },
    });

  return user;
}

export async function loginUser({
  email,
  password,
}) {
  const user =
    await prisma.user.findUnique({
      where: { email },
    });

  if (!user) {
    throw new Error(
      "Invalid email or password"
    );
  }

  const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isMatch) {
    throw new Error(
      "Invalid email or password"
    );
  }

  return user;
}