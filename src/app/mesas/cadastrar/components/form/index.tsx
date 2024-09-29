"use client";

import { FormEvent, useContext, useEffect, useState } from "react";
import { SignUpDesk } from "../../utils/db";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

import { getPeople } from '../../utils/db'
import { PersonType } from "@/@types/person";
import Select from "../select";

export default function Form() {
  const router = useRouter();

  const [pessoas, setPessoas] = useState<PersonType[]>([])
  const [atendente, setAtendente] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true);
    if (!!atendente && !!numero) {
      let status = await SignUpDesk({
        mesa: parseInt(numero),
        atendente_id: atendente,
      });

      if (status) {
        router.refresh();
        router.replace("/mesas");
      }
    }
    setLoading(false);
  }

  async function handleGetPeople(){
    let people = await getPeople()
    if(!!people.length){
      setPessoas(people)
    }
  }

  useEffect(() => {
    handleGetPeople()
  }, [])

  return (
    <div className="bg-slate-300 shadow-lg p-3 rounded mt-14">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex items-center justify-around w-full mt-5">
          <h2 className="mr-2">Atendente</h2>
          <Select people={pessoas} setAtendente={setAtendente}/>
        </div>
        <div className="flex items-center justify-around w-full mt-10">
          <h2 className="mr-2">Número da Mesa</h2>
          <input
            type="number"
            className="border-b-2 border-b-gray-300 px-1 flex-1"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
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
