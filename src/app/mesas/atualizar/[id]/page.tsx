import InternHeader from "@/components/InternHeader";
import Form from "./components/form";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { DeskType } from "@/app/@types/desk";

type RouteParams = {
  id: string;
};

export default async function Atualizar({ params }: { params: RouteParams }) {

  function hasId() {
    if (!params?.id) {
      redirect("/mesas");
    }
  }

  hasId()

  async function getDesk(){
    let data = await prisma.mesas.findFirst({
      where: {
        id: params.id,
      }
    })
    .then(res => res as DeskType)
    .catch(e => console.log(e)) 
    return !!data ? data : undefined
  }


  let desk = await getDesk();
  if(!desk?.id){
    redirect("/pessoas");
  }

  return (
    <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
      <InternHeader
        title="Atualizar Autorização"
        pathToReturn="/pessoas"
      />
      <Form desk={desk}/>
    </main>
  );
}
