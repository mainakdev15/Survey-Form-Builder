"use server";

import prisma from "@/lib/prisma";
import { formSchema, formSchemaType } from "@/schemas/form";

class UserNotFoundErr extends Error {}

export async function CreateForm(data: formSchemaType) {
  const validation = formSchema.safeParse(data);

  if (!validation.success) {
    throw new Error("form not valid");
  }

  const form = await prisma.form.create({
    data: {
      userId: "1",
      name: data.name,
      email: data.email,
    },
  });

  if (!form) {
    throw new Error("Something went wrong");
  }

  return form.id;
}
export async function GetFormById(id: number) {
  // const user = await currentUser();
  // if (!user) {
  //   throw new UserNotFoundErr();
  // }

  // return await prisma.form.findUnique({
  //   where: {
  //     userId: user.id,
  //     id,
  //   },
  // });
}