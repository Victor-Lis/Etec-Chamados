"use client";
import { useEffect, useState } from "react";

import { TicketType } from "../@types/ticket";

import Table from "./components/Table";
import InternHeader from "@/components/InternHeader";

import { onValue } from "firebase/database";
import { ticketsRef } from "@/utils/firebaseConfig";
import { handleSetTicket } from "./utils/handleSetTicket";
import ButtonNext from "./components/ButtonNext";
import ButtonAnalytics from "./components/ButtonAnalytics";

export default function Tickets() {
  const [tickets, setTickets] = useState<TicketType[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(ticketsRef, (snapshot) => {
      handleSetTicket({ snapshot: snapshot, setValue: setTickets });
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
      <InternHeader
        title="Chamados"
        pathToReturn="/navegacao"
        routerPath="/chamados/cadastrar"
        subtitle={
          <div className="w-full flex justify-between items-center mt-4">
            <div className="flex-1 flex flex-wrap justify-start items-start">
              <div className="flex justify-start items-center mr-3">
                <span className="w-3 h-3 bg-red-600 mr-1 border-slate-600 border-[1px]"></span>
                <h2>Atendimento Preferêncial</h2>
              </div>
              <div className="flex justify-start items-center mr-3">
                <span className="w-3 h-3 bg-black mr-1 border-slate-600 border-[1px]"></span>
                <h2>Atendimento Comum</h2>
              </div>
              <div className="flex justify-start items-center">
                <span className="w-3 h-3 bg-gray-300/75 mr-1 border-slate-600 border-[1px]"></span>
                <h2>Atendido</h2>
              </div>
            </div>
            <ButtonAnalytics/>
            <ButtonNext/>
          </div>
        }
      />
      <Table tickets={tickets} />
    </main>
  );
}
