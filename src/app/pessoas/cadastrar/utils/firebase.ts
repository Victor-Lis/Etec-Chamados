import { PersonType } from "@/app/@types/person";

import { database, peopleRef } from "@/utils/firebaseConfig";
import { push, ref, set } from 'firebase/database'

export async function SignUpPerson(pessoa: Omit<PersonType, "key">){
    let status: boolean = await push(peopleRef, pessoa)
    .then(() => true)
    .catch((err) => {
        console.log(err)
        return false
    })
    return status
}