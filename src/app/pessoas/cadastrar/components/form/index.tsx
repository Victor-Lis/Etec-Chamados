"use client";

import { FormEvent, useState } from "react";
import { SignUpPerson } from "../../utils/db"
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function Form() {
  const router = useRouter();

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true);
    if (!!nome && !!email) {
      let status = await SignUpPerson({
        email: email,
        name: nome,
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
          <h2 className="mr-2">Nome</h2>
          <input
            type="text"
            className="border-b-2 border-b-gray-300 px-1 flex-1"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-around w-full mt-10">
          <h2 className="mr-2">Email</h2>
          <input
            type="text"
            className="border-b-2 border-b-gray-300 px-1 flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
