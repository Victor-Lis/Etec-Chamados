"use server"
import { PersonType } from "@/@types/person";

import prisma from "@/lib/prisma";

type UpdatePersonParams = {
    data: {
        name: string
        email: string,
    },
    id: string
}

export async function getPerson({id}:{id: string}){
    let person: PersonType | null = await prisma.atendentes.findFirst({
        where: {
            id,
        }
    })

    if(person){
        return person
    }
}

export async function UpdatePerson({data, id}: UpdatePersonParams){
    let status: boolean = await prisma.atendentes.update({
        where: {
            id,
        },
        data,
    })
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}