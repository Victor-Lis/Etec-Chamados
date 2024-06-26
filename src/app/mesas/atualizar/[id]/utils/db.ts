"use server"

import { DeskType } from "@/@types/desk";
import { PersonType } from "@/@types/person";
import prisma from "@/lib/prisma";

export async function getDesk({id}:{id: string}){
    let data = await prisma.mesas.findFirst({
      where: {
        id,
      }
    })
    .then(res => res as DeskType)
    .catch(e => console.log(e)) 
    return !!data ? data : undefined
  }

export async function updateDesk({id, mesa, atendente_id}:{id: string, mesa: number, atendente_id: string}){
    let status: boolean = await prisma.mesas.update({
        where: {
            id,
        },
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