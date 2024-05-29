"use client"

import { FiCornerDownLeft } from "react-icons/fi";
import { useRouter } from 'next/navigation'
 
type ButtonGoBackProps = {
  pathToReturn?: string;
  clearContext?: () => void
}

export default function ButtonGoBack({pathToReturn, clearContext}: ButtonGoBackProps) {
  const router = useRouter()
  function handleClick(){
    pathToReturn? router.replace(pathToReturn): router.back()
    clearContext ? clearContext() : '' 
  }
  return <FiCornerDownLeft className="hover:scale-110 hover:shadow-2xl duration-300 cursor-pointer" size={30} color="#ff3535" onClick={handleClick}/>;
}