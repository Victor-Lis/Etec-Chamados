import { PersonType } from "@/app/@types/person";

import { database, peopleRef } from "@/utils/firebaseConfig";
import { get, push, ref, set } from 'firebase/database'

export async function getPerson({key}:{key: string}){
    const personRef = ref(database, `pessoas/${key}`)
    let person: Omit<PersonType, "key"> = await get(personRef)   
    .then((snapshot) => snapshot.val())
    .catch((e) => console.log(e))

    return {
        nome: person?.nome,
        email: person?.email,
        key,
    } as PersonType
}

export async function UpdatePerson({pessoa, key}:{pessoa: Omit<PersonType, "key">, key: string}){
    const personRef = ref(database, `pessoas/${key}`)
    let status: boolean = await set(personRef, pessoa)
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}