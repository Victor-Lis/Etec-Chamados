import { TicketType } from "@/@types/ticket";

import ButtonEndTime from "./components/ButtonEndTime";
import ButtonRestartEndTime from "./components/ButtonRestartEndTime";
import ButtonEdit from "@/components/ButtonEdit";
import ButtonExclude from "@/components/ButtonExclude";

import { formatNum } from "@/utils/formatNum";
import { formatDate } from "@/utils/formatDate";
import { DeleteTicket } from "./utils/db";

export default function TableRow({ticket}: {ticket: TicketType}) {

  const formatTime = (date: Date) => `${formatNum(date.getHours())}:${formatNum(date.getMinutes())}`

  async function handleDelete(){
    "use server"
    let status = await DeleteTicket({id: ticket.id})
    return status
  }

  return (
    <tr
      key={ticket.id}
      className={`border-b-2 border-b-slate-200 h-16 last:border-b-0 ${ticket.atendido ? "bg-gray-300/75" : "bg-slate-100"}`}
    >
      <td className={`font-medium text-left pl-1 ${ticket.preferencial && "text-red-600"}`}>{formatNum(ticket.id)}</td>
      <td className="font-medium text-left">{ticket.Mesa?.mesa}</td>
      <td className="font-medium text-left hidden sm:table-cell">{ticket.Mesa?.Atendente?.name}</td>
      <td className={`font-medium text-left ${ticket.preferencial && "text-red-600"}`}>{ticket.responsavel}</td>
      <td className={`font-medium py-2 flex flex-col`}>
        <h2 className="w-full text-bold">{formatDate(new Date(ticket.time_start))}</h2>
        <p className="text-gray-600">{formatTime(new Date(ticket.time_start))} - {ticket?.time_end ? formatTime(new Date(ticket?.time_end)) : "..."}</p>
      </td>
      <td className="font-medium text-left hidden sm:table-cell">
        {!ticket.atendido && <ButtonEndTime routeReplace="/chamados" id={ticket.id}/>}
        {!!ticket.atendido && <ButtonRestartEndTime routeReplace="/chamados" id={ticket.id}/>}
        {!ticket.atendido && <ButtonEdit path="/chamados/atualizar/" itemId={`${ticket.id}`}/>} 
        <ButtonExclude routeReplace="/chamados" handleDelete={handleDelete}/>
      </td>
    </tr>
  );
}
