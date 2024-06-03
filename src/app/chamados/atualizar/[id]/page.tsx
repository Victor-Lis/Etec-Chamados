import InternHeader from "@/components/InternHeader";
import Form from "./components/form";
import { getTicket } from "./utils/db";
import { redirect } from "next/navigation";
import { isAuthorized } from "@/utils/isAuthorized";

type RouteParams = {
  id: string;
};

export default async function Atualizar({ params }: { params: RouteParams }) {

  await isAuthorized()

  function hasId() {
    if (!params?.id) {
      redirect("/chamados");
    }
  }

  hasId()

  let ticket = await getTicket({ id: parseInt(params?.id) });
  if(!ticket?.id){
    redirect("/chamados");
  }

  return (
    <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
      <InternHeader
        title="Atualizar Chamado"
        pathToReturn="/chamados"
      />
      <Form ticket={ticket}/>
    </main>
  );
}
