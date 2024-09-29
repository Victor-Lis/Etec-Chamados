import TableRow from "../TableRow";
import type { TicketType } from "@/@types/ticket";

export default function Table({tickets}:{tickets: TicketType[]}) {
  return (
    <table className="w-10/12 min-w-80 mx-auto my-3 bg-white">
      <thead className="bg-slate-50">
        <tr className="p-y-2 text-blue-600">
          <th className="font-medium text-left pl-1">Senha</th>
          <th className="font-medium text-left">Mesa</th>
          <th className="font-medium text-left hidden sm:table-cell">Atendente</th>
          <th className="font-medium text-left">Responsável</th>
          <th className="font-medium text-left">Duração</th>
          <th className="font-medium text-left hidden sm:table-cell">#</th>
        </tr>
      </thead>
      <tbody>
        {tickets?.map((ticket, index) => {
          return <TableRow key={ticket.id} ticket={ticket} />;
        })}
      </tbody>
    </table>
  );
}
