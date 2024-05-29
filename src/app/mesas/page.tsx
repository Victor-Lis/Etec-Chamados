import prisma from "@/lib/prisma";
import { DeskType } from "../@types/desk";

import Table from "./components/Table";
import InternHeader from "@/components/InternHeader";

export default async function Mesas() {

  async function getDesks(){
    let data = await prisma.mesas.findMany({
      include: {
        Atendente: true
      }
    })
    .then(res => res as DeskType[])
    .catch(e => console.log(e)) 
    return !!data ? data : []
  }

  const desks = await getDesks()

  return (
    <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
      <InternHeader
        title="Mesas Cadastradas"
        pathToReturn="/navegacao"
        routerPath="/mesas/cadastrar"
      />
      <Table desks={desks} />
    </main>
  );
}
 