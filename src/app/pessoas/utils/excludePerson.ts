import { database } from "@/utils/firebaseConfig";
import { ref, remove } from 'firebase/database'

export async function excludePerson(key: string){
    const personRef = ref(database, `pessoas/${key}`)
    let status = await remove(personRef)
    .then(() => true)
    .catch((e) => { 
        console.log(e)
        return false
    })

    return status
}