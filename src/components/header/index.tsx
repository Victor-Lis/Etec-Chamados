"use client";

import Image from "next/image";
import Link from "next/link";
import EtecLogo from "./../../../public/ETEC Logo.png"
import { FiLogOut, FiLoader, FiLock } from "react-icons/fi";
import { BiArchiveIn } from "react-icons/bi";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { status, data } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7x1 mx-auto">
        <Link 
          href={"https://www.etecatibaia.com.br/"}
          className="hover:scale-95 hover:opacity-75 duration-300"
        >
          <Image
            src={EtecLogo}
            alt="Logo da Etec Professor Carmine Biagio Tundisi"
            width={80}
            height={30}
          />
        </Link>
        <Link href={"/"}>
          <h1 className="font-bold text-2x1 hover:tracking-widest duration-300 text-zinc-950">
            Etec 
            <span className="text-blue-600"> Chamados</span>
          </h1>
        </Link>

        {status === "loading" && (
          <button className="animate-spin">
            <FiLoader size={26} color="#09090b" />
          </button>
        )}

        {status === "unauthenticated" && (
          <button onClick={handleLogin}>
            <FiLock size={26} color="#09090b" />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex gap-x-4 items-baseline">
            <Link href={"/navegacao"} className="hover:scale-110 duration-300 cursor-pointer">
              <BiArchiveIn size={24} color="#09090b" />
            </Link>

            <button className="hover:scale-110 duration-300 cursor-pointer" onClick={handleLogout}>
              <FiLogOut size={24} color="#ff3a13" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
