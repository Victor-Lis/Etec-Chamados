import { PersonType } from "@/app/@types/person";

import ButtonEdit from "@/components/ButtonEdit";
import ButtonExclude from "@/components/ButtonExclude";

export default function TableRow({person}: {person: PersonType}) {
  return (
    <tr
      key={person.key}
      className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100"
    >
      <td className="font-medium text-left pl-1">{person.nome}</td>
      <td className="font-medium text-left hidden sm:table-cell">{person.email}</td>
      <td className="font-medium text-left">
        <ButtonEdit path="/pessoas/atualizar/" itemKey={person.key}/>
        <ButtonExclude firebaseKey={person.key} firebaseRef="pessoas/" routeReplace="/pessoas" />
      </td>
    </tr>
  );
}
