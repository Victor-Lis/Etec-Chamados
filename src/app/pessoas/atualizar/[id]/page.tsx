import InternHeader from "@/components/InternHeader";
import Form from "./components/form";
import { getPerson } from "./utils/db";
import { redirect } from "next/navigation";
import { isAuthorized } from "@/utils/isAuthorized";

type RouteParams = {
  id: string;
};

export default async function Atualizar({ params }: { params: RouteParams }) {

  await isAuthorized()

  function hasId() {
    if (!params?.id) {
      redirect("/pessoas");
    }
  }

  hasId()

  let person = await getPerson({ id: params?.id as string });
  if(!person?.name){
    redirect("/pessoas");
  }

  return (
    <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
      <InternHeader
        title="Atualizar Autorização"
        pathToReturn="/pessoas"
      />
      <Form person={person}/>
    </main>
  );
}
