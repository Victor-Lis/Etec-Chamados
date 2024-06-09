"use server"
import prisma from "@/lib/prisma";
import { TicketType } from "@/@types/ticket";

export async function getTickets(){
    "use server"
    let tickets = await prisma.chamados.findMany({
        orderBy: {
            id: "desc"
        },
        where: {
            atendido: false,
        },
        include: {
            Mesa: {
                include: {
                    Atendente: true
                }
            }
        }
    })
    .then(tickets => tickets.filter(ticket => !!ticket.Mesa?.mesa))
    return tickets ? tickets[0] as TicketType : undefined
}