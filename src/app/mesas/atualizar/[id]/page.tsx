import InternHeader from "@/components/InternHeader";
import Form from "./components/form";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { DeskType } from "@/@types/desk";
import { getDesk } from "./utils/db";
import { isAuthorized } from "@/utils/isAuthorized";

type RouteParams = {
  id: string;
};

export default async function Atualizar({ params }: { params: RouteParams }) {

  await isAuthorized()

  function hasId() {
    if (!params?.id) {
      redirect("/mesas");
    }
  }

  hasId()

  let desk = await getDesk({id: params?.id as string});
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
