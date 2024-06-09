"use client";

import Table from "./components/Table";
import InternHeader from "@/components/InternHeader";
import { getDesks } from "../chamados/proximo/utils/db";
import { useEffect, useState } from "react";
import { DeskType } from "@/@types/desk";
import { isAuthorized } from "@/utils/isAuthorized";

export default function Mesas() {
  const [desks, setDesks] = useState<DeskType[]>([]);

  useEffect(() => {
    async function fetchData() {
      await isAuthorized();
      const data = await getDesks();
      if (data.length) setDesks(data);
    }
    fetchData()
  }, []);

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
