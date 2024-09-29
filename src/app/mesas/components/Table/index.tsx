"use client"
import type { DeskType } from "@/@types/desk";
import TableRow from "../TableRow";

export default function Table({desks}:{desks: DeskType[]}) {
  return (
    <table className="w-10/12 min-w-80 mx-auto my-5 bg-slate-300">
      <thead>
        <tr className="p-y-2 bg-slate-300 text-blue-600">
          <th className="font-medium text-left pl-1">Atendente</th>
          <th className="font-medium text-left hidden sm:flex">Mesa</th>
          <th className="font-medium text-left">#</th>
        </tr>
      </thead>
      <tbody>
        {desks?.map((desk, index) => {
          return <TableRow key={desk.id} desk={desk} />;
        })}
      </tbody>
    </table>
  );
}
