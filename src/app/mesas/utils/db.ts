"use server";

import { DeskType } from "@/@types/desk";
import prisma from "@/lib/prisma";

export async function getDesks() {
  "use server";
  let data = await prisma.mesas
    .findMany({
      include: {
        Atendente: true,
      },
    })
    .then((res) => res as DeskType[])
    .catch((e) => console.log(e));
  return !!data ? data : [];
}

export async function handleDelete({desk}:{desk: DeskType}) {
  "use server";

  await prisma.mesas.update({
    where: {
      id: desk.id,
    },
    data: {
      Atendente: {
        disconnect: true,
      },
      Chamados: {
        set: [],
      },
    },
  });

  let status = await prisma.mesas
    .delete({
      where: {
        id: desk.id,
      },
    })
    .then(() => true)
    .catch(() => false);
  return status;
}
