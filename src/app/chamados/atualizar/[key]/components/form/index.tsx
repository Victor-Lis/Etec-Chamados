"use client";

import { FormEvent, useContext, useEffect, useState } from "react";
import { UpdateDesk } from "../../utils/firebase";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

import { getPeople } from '../../utils/firebase'
import { PersonType } from "@/app/@types/person";
import Select from "../select";
import { DeskType } from "@/app/@types/desk";

export default function Form({desk}:{desk: DeskType}) {
  const router = useRouter();

  const [pessoas, setPessoas] = useState<PersonType[]>([])
  const [atendente, setAtendente] = useState<string>(desk.atendente);
  const [numero, setNumero] = useState<string>(`${desk.numero}`);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true);
    if (!!atendente && !!numero) {
      let status = await UpdateDesk({
        desk: {
          atendente,
          numero: parseInt(numero),
        },
        key: desk.key
      });

      if (status) {
        router.refresh()
        router.back();
      }
    }
    setLoading(false);
  }

  async function handleGetPeople(){
    let people = await getPeople()
    if(!!people.length){
      setPessoas(people.filter((person) => person.nome !== desk.atendente))
    }
  }

  useEffect(() => {
    handleGetPeople()
  }, [])

  return (
    <div className="bg-white shadow-lg p-3 rounded mt-14">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex items-center justify-around w-full mt-5">
          <h2 className="mr-2">Atendente</h2>
          <Select people={pessoas} setAtendente={setAtendente} firstOption={desk.atendente}/>
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
          {!loading ? "Atualizar" : <Loading/>}
        </button>
      </form>
    </div>
  );
}
