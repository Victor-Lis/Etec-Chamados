"use client"
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { restartEndTime } from "../../utils/db";

type ButtonRestartEndTimeProps = {
    routeReplace: string,
    id: number;
}

export default function ButtonRestartEndTime({routeReplace, id}: ButtonRestartEndTimeProps) {

 const [loading, setLoading] = useState<boolean>(false)
 const router = useRouter()

 async function handleRestartEndTime(){
    setLoading(true)
    let status = await restartEndTime({id})
    if(status){
        router.replace(routeReplace)
        router.refresh()
    }
    setLoading(false)
 }

 return (
    <button className="mr-3" onClick={handleRestartEndTime}>
        {loading ? <Loading size={24}/> : <FiX size={24} color="#bd1919" className="hover:scale-110 duration-300 cursor-pointer"/>}
    </button>
 );
}