"use client";
import { DeskType } from "@/@types/desk";
import ButtonEdit from "@/components/ButtonEdit";
import ButtonExclude from "@/components/ButtonExclude";
import { handleDelete } from "../../utils/db";

export default function TableRow({ desk }: { desk: DeskType }) {
  const formatNum = (n: number) => (n < 10 ? "0" + n : n);

  return (
    <tr
      key={desk.id}
      className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100"
    >
      <td className="font-medium text-left pl-1">{desk.Atendente?.name}</td>
      <td className="font-medium text-left hidden sm:table-cell">
        {formatNum(desk.mesa)}
      </td>
      <td className="font-medium text-left">
        <ButtonEdit path="/mesas/atualizar/" itemId={desk.id} />
        <ButtonExclude handleDelete={() => handleDelete({desk: desk})} />
      </td>
    </tr>
  );
}
