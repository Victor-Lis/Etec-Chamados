"use client"
import { PersonType } from "../../@types/person";

import Table from "./components/Table";
import InternHeader from "@/components/InternHeader";

import { getPeople } from "../mesas/cadastrar/utils/db";
import { isAuthorized } from "@/utils/isAuthorized";
import { useEffect, useState } from "react";

export default function Pessoas() {
  const [people, setPeople] = useState<PersonType[]>([]);

  useEffect(() => {
    async function fetchData() {
      await isAuthorized();
      let data: PersonType[] = await getPeople();
      if (data) {
        setPeople(data);
      }
    }
    fetchData()
  });

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
