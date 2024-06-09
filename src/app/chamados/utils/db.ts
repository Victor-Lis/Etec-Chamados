"use server"
import { TicketType } from "@/@types/ticket";
import prisma from "@/lib/prisma";

export async function getTickets() {
  "user server"
  let data = await prisma.chamados
    .findMany({
      orderBy: {
        id: "asc",
      },
      include: {
        Mesa: {
          include: {
            Atendente: true,
          },
        },
      },
    })
    .then(
      (res) =>
        res.sort(
          (a, b) => Number(b.atendido) - Number(a.atendido)
        ) as TicketType[]
    )
    .catch((e) => console.log(e));
  return !!data ? data : [];
}
