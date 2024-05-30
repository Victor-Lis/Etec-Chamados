import { PersonType } from "../../@types/person";

import Table from "./components/Table";
import InternHeader from "@/components/InternHeader";

import { getPeople } from "../mesas/cadastrar/utils/db";

export default async function Pessoas() {
  const people: PersonType[] = await getPeople()

  return (
    <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
      <InternHeader
        title="Pessoas Autorizadas"
        pathToReturn="/navegacao"
        routerPath="/pessoas/cadastrar"
      />
      <Table people={people} />
    </main>
  );
}
 