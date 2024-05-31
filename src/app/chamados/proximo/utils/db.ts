"use server";
import { DeskType } from "@/@types/desk";
import { TicketType } from "@/@types/ticket";

import prisma from "@/lib/prisma";

export async function getDesks() {
  let mesas = await prisma.mesas.findMany({
    include: {
      Atendente: true,
    },
  });
  return mesas as DeskType[];
}

export async function NextTicket(
  ticket: Omit<
    TicketType,
    | "Mesa"
    | "time_start"
    | "time_end"
    | "preferencial"
    | "atendido"
    | "responsavel"
    | "id"
  >
) {
  let nextTicket = await prisma.chamados.findFirst({
    orderBy: {
      id: "asc",
    },
    where: {
      atendido: false,
      preferencial: true,
      mesa_id: {
        equals: null,
      },
    },
  });

  if (!nextTicket) {
    nextTicket = await prisma.chamados.findFirst({
      orderBy: {
        id: "asc",
      },
      where: {
        atendido: false,
        mesa_id: {
          equals: null,
        },
      },
    });
  }

  if (nextTicket) {
    let status: boolean = await prisma.chamados
      .update({
        where: { id: nextTicket?.id },
        data: { mesa_id: ticket.mesa_id },
      })
      .then(() => true)
      .catch((err) => {
        console.log(err);
        return false;
      });
    return status;
  } else {
    return false;
  }
}
