"use server";
import prisma from "@/lib/prisma";

export async function endTime({ id }: { id: number }) {
  "use server";
  let ticketEndedSuccessfully = await prisma.chamados
    .update({
      where: {
        id,
      },
      data: {
        time_end: new Date(),
        atendido: true,
      },
    })
    .then(() => true)
    .catch((e) => {
      console.log(e);
      return false;
    });

  return ticketEndedSuccessfully;
}

export async function restartEndTime({ id }: { id: number }) {
  "use server";
  let ticketEndedSuccessfully = await prisma.chamados
    .update({
      where: {
        id,
      },
      data: {
        time_end: null,
        atendido: false,
      },
    })
    .then(() => true)
    .catch((e) => {
      console.log(e);
      return false;
    });

  return ticketEndedSuccessfully;
}

export async function DeleteTicket({ id }: { id: number }) {
  "use server";
  await prisma.chamados.update({
    where: {
      id: id,
    },
    data: {
      Mesa: {
        disconnect: true,
      },
    },
  });

  let status = await prisma.chamados
    .delete({
      where: {
        id: id,
      },
    })
    .then(() => true)
    .catch(() => false);
  return status;
}
