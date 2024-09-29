"use client"
import type { PersonType } from "@/@types/person";

import ButtonEdit from "@/components/ButtonEdit";
import ButtonExclude from "@/components/ButtonExclude";
import { handleDelete } from "../utils/db";

export default function TableRow({person}: {person: PersonType}) {
  return (
    <tr
      key={person.id}
      className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-gray-300"
    >
      <td className="font-medium text-left pl-1">{person.name}</td>
      <td className="font-medium text-left hidden sm:table-cell">{person.email}</td>
      <td className="font-medium text-left">
        <ButtonEdit path="/pessoas/atualizar/" itemId={person.id as string}/>
        <ButtonExclude handleDelete={() => handleDelete({person})}/>
      </td>
    </tr>
  );
}
