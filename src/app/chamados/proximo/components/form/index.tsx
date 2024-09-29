"use client";

import { FormEvent, useContext, useEffect, useState } from "react";
import { NextTicket } from "../../utils/db";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import Select from "../select";
import { DeskType } from "@/@types/desk";

type FormProps = {
  mesas: DeskType[]
}

export default function Form({mesas}: FormProps) {
  const router = useRouter();

  const [mesa, setMesa] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true);
    if (!!mesa) {
      let status = await NextTicket({
        mesa_id: mesa,
      });

      if (status) {
        router.back();
        router.refresh();
      }
    }
    setLoading(false);
  }

  return (
    <div className="bg-white shadow-lg p-3 rounded mt-14 w-80">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex items-center justify-around w-full mt-6 mb-2">
          <h2 className="mr-2">Mesa Livre</h2>
          <Select desks={mesas} setDesk={setMesa}/>
        </div>
        <button
          className={
            "bg-green-500 my-5 mx-auto py-1 px-5 flex items-center justify-center rounded text-white shadow-sm hover:scale-105 hover:shadow-lg duration-300"
          }
        >
          {!loading ? "Salvar" : <Loading/>}
        </button>
      </form>
    </div>
  );
}
