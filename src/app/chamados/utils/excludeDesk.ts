import { database } from "@/utils/firebaseConfig";
import { ref, remove } from 'firebase/database'

export async function excludeDesk(key: string){
    const mesaRef = ref(database, `mesas/${key}`)
    let status = await remove(mesaRef)
    .then(() => true)
    .catch((e) => { 
        console.log(e)
        return false
    })

    return status
}