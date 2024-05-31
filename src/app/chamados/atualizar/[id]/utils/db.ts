"use server"
import { TicketType } from "@/@types/ticket";
import prisma from "@/lib/prisma";

export async function getTicket({id}:{id: number}){
    let ticket = await prisma.chamados.findFirst({
        where: {id},
        include: {Mesa: true}
    })
    return ticket as TicketType
}

export async function UpdateTicket(ticket: Omit<TicketType, "Mesa" | "time_start" | "time_end">){
    let status: boolean = await prisma.chamados.update({
        where: {id: ticket.id},
        data: {...ticket},
    })
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}