import Link from "next/link";

export default function ButtonAnalytics() {

 return (
    <Link 
        href={"/chamados/analise"}
        className="hover:opacity-75 duration-300 cursor-pointer bg-green-600 px-2 rounded-sm text-white mx-2"
    >
        Dados
    </Link>
 );
}