"use client";
import { FiChevronsRight } from "react-icons/fi";
import Link from "next/link";

export default function ButtonNext() {
  return (
    <Link
      href="/chamados/proximo"
      className="hover:opacity-75 duration-300 cursor-pointer bg-blue-600 pl-2 pr-1 rounded-sm text-white flex justify-center items-center"
    > 
      <p>Próximo</p>      
      <FiChevronsRight size={20} color="#fff"/>
    </Link>
  );
}
