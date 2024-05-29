"use client"
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

export default function ButtonEndTime({firebaseRef, firebaseKey, routeReplace}:{firebaseRef: string, firebaseKey: string, routeReplace: string}) {

 const [loading, setLoading] = useState<boolean>(false)
 const router = useRouter()

 async function handleExclude(){
    setLoading(true)
    // let status = await excludeFromRef({key: firebaseKey, firebaseRef: firebaseRef})
    let status = true;
    if(status){
        router.replace(routeReplace)
        router.refresh()
    }
    setLoading(false)
 }

 return (
    <button className="mr-3" onClick={handleExclude}>
        {loading ? <Loading size={24}/> : <FiCheck size={24} color="#16a34a" className="hover:scale-110 duration-300 cursor-pointer"/>}
    </button>
 );
}