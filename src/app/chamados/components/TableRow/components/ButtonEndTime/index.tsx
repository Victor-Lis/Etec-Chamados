"use client"
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { endTime } from "../../utils/db";

type ButtonEndTimeProps = {
    routeReplace: string,
    id: number,
}

export default function ButtonEndTime({routeReplace, id}: ButtonEndTimeProps) {

 const [loading, setLoading] = useState<boolean>(false)
 const router = useRouter()

 async function handleEndTime(){
    setLoading(true)
    let status = await endTime({id})
    if(status){
        router.replace(routeReplace)
        router.refresh()
    }
    setLoading(false)
 }

 return (
    <button className="mr-3" onClick={handleEndTime}>
        {loading ? <Loading size={24}/> : <FiCheck size={24} color="#16a34a" className="hover:scale-110 duration-300 cursor-pointer"/>}
    </button>
 );
}