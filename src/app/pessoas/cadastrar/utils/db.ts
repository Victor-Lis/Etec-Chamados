"use server"
import { PersonType } from "@/@types/person";

import prisma from '@/lib/prisma'

export async function SignUpPerson(Props:{name: string, email: string}){
    let status: boolean = await prisma.atendentes.create({
        data: {...Props}
    })
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}