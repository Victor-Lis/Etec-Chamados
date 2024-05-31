"use client";
import { FiBarChart2 } from "react-icons/fi";
import Link from "next/link";

export default function ButtonAnalytics() {
  return (
    <Link
      href="/chamados/analise"
      className="hover:opacity-75 duration-300 cursor-pointer bg-green-600 pl-2 pr-1 mr-2 rounded-sm text-white flex justify-center items-center"
    > 
      <p>Dados</p>      
      <FiBarChart2 className="ml-[0.80px] mr-[0.70px]" size={17.5} color="#fff"/>
    </Link>
  );
}
