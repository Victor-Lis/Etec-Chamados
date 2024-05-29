"use server"

import { DeskType } from "@/app/@types/desk";
import { PersonType } from "@/app/@types/person";
import prisma from "@/lib/prisma";

export async function SignUpDesk({mesa, atendente_id}:{mesa: number, atendente_id: string}){
    let status: boolean = await prisma.mesas.create({
        data: {
            mesa: mesa,
            Atendente: {
                connect: {
                    id: atendente_id as string
                }
            }
        },
    })
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}

export async function getPeople(){
    let people: PersonType[] = await prisma.atendentes.findMany({})
    
    return people
}