"use client";

import { FormEvent, useContext, useEffect, useState } from "react";
import { SignUpTicket } from "../../utils/firebase";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function Form() {
  const router = useRouter();

  const [responsavel, setResponsavel] = useState<string>('');
  const [preferencial, setPreferencial] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true);
    if (!!responsavel) {
      let status = await SignUpTicket({
        responsavel, 
        preferencial,
      });

      if (status) {
        router.refresh()
        router.back();
      }
    }
    setLoading(false);
  }

  return (
    <div className="bg-white shadow-lg p-3 rounded mt-14">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex items-center justify-around w-full mt-5">
          <h2 className="mr-2">Responsável</h2>
          <input
            type="text"
            className="border-b-2 border-b-gray-300 px-1 flex-1"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between w-full mt-10">
          <h2 className="mr-2">Preferêncial</h2>
          <input
            type="checkbox"
            className="border-b-2 border-b-gray-300 px-1 accent-blue-600 hover:cursor-pointer hover:scale-110 duration-300"
            checked={preferencial}
            onChange={(e) => setPreferencial(!preferencial)}
          />
        </div>
        <button
          className={
            "bg-green-500 mt-10 mb-5 mx-auto py-1 px-5 flex items-center justify-center rounded text-white shadow-sm hover:scale-105 hover:shadow-lg duration-300"
          }
        >
          {!loading ? "Cadastrar" : <Loading/>}
        </button>
      </form>
    </div>
  );
}
