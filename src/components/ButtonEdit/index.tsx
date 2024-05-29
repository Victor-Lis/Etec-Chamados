"use client"
import { FiEdit } from "react-icons/fi";

import { useRouter } from "next/navigation";

export default function ButtonEdit({path, itemId}:{path: string, itemId: string}) {
 const router = useRouter()
 return (
    <button className="mr-3" onClick={() => router.push(`${path}${itemId}`)}>
        <FiEdit size={24} color="#006aff" className="hover:scale-110 duration-300 cursor-pointer"/>
    </button>
 );
}