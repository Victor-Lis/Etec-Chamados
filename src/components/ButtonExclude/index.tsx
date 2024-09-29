"use client"
import { DeskType } from "@/@types/desk";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

type ButtonProps = {
    handleDelete: () => Promise<boolean>; 
}


export default function ButtonExclude({handleDelete}: ButtonProps) {
    
 const router = useRouter()
 const [loading, setLoading] = useState<boolean>(false)

 async function handleExclude(){
    setLoading(true)
    const status = await handleDelete()
    if(status){
        // console.log(process.env.NEXT_PUBLIC_HOST_URL)
        router.replace(`${process.env.NEXT_PUBLIC_HOST_URL as string}/navegacao`)
        router.refresh()
    }
    setLoading(false)
 }

 return (
    <button type="button" className="mr-3" onClick={handleExclude}>
        {loading ? <Loading size={24}/> : <FiTrash2 size={24} color="#ff000f" className="hover:scale-110 duration-300 cursor-pointer"/>}
    </button>
 );
}