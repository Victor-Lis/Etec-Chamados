import InternHeader from "@/components/InternHeader";
import Form from "./components/form";
import { getPerson } from "./utils/firebase";
import { redirect } from "next/navigation";

type RouteParams = {
  key: string;
};

export default async function Atualizar({ params }: { params: RouteParams }) {

  function hasKey() {
    if (!params?.key) {
      redirect("/pessoas");
    }
  }

  hasKey()

  let person = await getPerson({ key: params?.key });
  if(!person.nome){
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
