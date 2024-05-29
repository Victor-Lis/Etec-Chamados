import { DeskType } from "@/app/@types/desk";
import { PersonType } from "@/app/@types/person";
import { TicketType } from "@/app/@types/ticket";

import { database, peopleRef } from "@/utils/firebaseConfig";
import { get, push, ref, set } from 'firebase/database'

export async function getTicket({key}:{key: string}){
    const chamadosRef = ref(database, `chamados/${key}`)
    let chamado: Omit<TicketType, "key"> = await get(chamadosRef)   
    .then((snapshot) => snapshot.val())
    .catch((e) => console.log(e))

    return {
        senha: chamado.senha,
        atendente: chamado.atendente,
        mesa: chamado.mesa,
        preferencial: chamado.preferencial,
        responsavel: chamado.responsavel,
        key,
    } as TicketType
}

export async function UpdateDesk({desk, key}:{desk: Omit<DeskType, "key">, key: string}){
    const deskRef = ref(database, `chamados/${key}`)
    let status: boolean = await set(deskRef, desk)
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}

export async function getTickets(){
    const ticketsRef = ref(database, `chamados`)
    let snapshotVal = await get(ticketsRef)   
    .then((snapshot) => snapshot.val())
    .catch((e) => console.log(e))
 
    let tickets: PersonType[] = Object.values(snapshotVal)
    
    return tickets
}