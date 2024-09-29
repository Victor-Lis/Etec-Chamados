import Link from "next/link";
import type { IconType } from "react-icons";

type IconBoxProps = {
  href: string,
  Icon: IconType,
  description: string
}

export default function IconBox({href, Icon, description}: IconBoxProps) {
 return (
   <Link 
      href={href} 
      className="min-w-40 m-5 flex flex-col justify-center items-center p-5 bg-slate-300 shadow-md rounded-md hover:scale-105 hover:shadow-xl hover:border-blue-600 hover:border-[0.5px] duration-300"
    >
    <Icon size={30} color="#2563eb"/>
    <h3 className="text-gray-700">{description}</h3>
   </Link>
 );
}