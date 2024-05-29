import InternHeader from "@/components/InternHeader";
import Form from "./components/form";
import { getDesk } from "./utils/firebase";
import { redirect } from "next/navigation";

type RouteParams = {
  key: string;
};

export default async function Atualizar({ params }: { params: RouteParams }) {

  function hasKey() {
    if (!params?.key) {
      redirect("/mesas");
    }
  }

  hasKey()

  let desk = await getDesk({ key: params?.key });
  if(!desk.atendente){
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
