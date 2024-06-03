"use client"
import React, { useState, useEffect } from "react";

import { TicketType } from "@/@types/ticket";
import { getTickets } from "./utils/getTickets";

import TicketCard from "./components/TicketCard";

export default function Home() {
  const [ticket, setTicket] = useState<TicketType | undefined>(); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTickets();
      setTicket(data);
    };
    
    const intervalId = setInterval(fetchData, 10000); 

    fetchData()

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <main className="flex items-center flex-col justify-start h-[calc(100vh-80px)] py-[10px] overflow-y-hidden">
      {ticket!! && <TicketCard ticket={ticket} last={true}/>}
    </main>
  );
}
