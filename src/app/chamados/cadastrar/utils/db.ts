"use server"
import { TicketType } from "@/@types/ticket";

import prisma from "@/lib/prisma";

export async function SignUpTicket(ticket: Omit<TicketType, "id" | "Mesa" | "time_start" | "time_end">){
    let status: boolean = await prisma.chamados.create({
        data: {...ticket}
    })
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}