"use client"
import type { DeskType } from "@/@types/desk";
import InternHeader from "@/components/InternHeader";
import Form from "./components/form";
import { getDesks } from "./utils/db";
import { isAuthorized } from "@/utils/isAuthorized";
import { useEffect, useState } from "react";

export default function Cadastrar() {
  const [desks, setDesks] = useState<DeskType[]>([])

 useEffect(() => {
  async function handleLoad(){
   await isAuthorized()
   const desks = await getDesks()
   setDesks(desks)
  }
  handleLoad()
 }, [])


 return (
  <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
    <InternHeader title="Chamando Próximo" pathToReturn="/chamados"/>
    <Form mesas={desks}/>
  </main>
 );
}