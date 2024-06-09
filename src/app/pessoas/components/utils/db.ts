'use server'
import { PersonType } from "@/@types/person";
import prisma from "@/lib/prisma";

export async function handleDelete({person}: {person: PersonType}) {
  "use server";

  await prisma.atendentes.update({
    where: {
      id: person.id,
    },
    data: {
      Mesas: {
        set: [],
      },
    },
  });

  let status = await prisma.atendentes
    .delete({
      where: {
        id: person.id,
      },
    })
    .then(() => true)
    .catch(() => false);
  return status;
}
