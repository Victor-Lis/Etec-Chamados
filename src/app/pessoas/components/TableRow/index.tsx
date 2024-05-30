import { PersonType } from "@/@types/person";

import ButtonEdit from "@/components/ButtonEdit";
import ButtonExclude from "@/components/ButtonExclude";
import prisma from "@/lib/prisma";

export default function TableRow({person}: {person: PersonType}) {

  async function handleDelete() {
    "use server";

    await prisma.atendentes.update({
      where: {
        id: person.id,
      },
      data: {
        Mesas: {
          set: []
        }
      },
    });

    let status = await prisma.atendentes.delete({
        where: {
          id: person.id,
        },
      })
      .then(() => true)
      .catch(() => false);
    return status;
  }

  return (
    <tr
      key={person.id}
      className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100"
    >
      <td className="font-medium text-left pl-1">{person.name}</td>
      <td className="font-medium text-left hidden sm:table-cell">{person.email}</td>
      <td className="font-medium text-left">
        <ButtonEdit path="/pessoas/atualizar/" itemId={person.id as string}/>
        <ButtonExclude routeReplace="/pessoas" handleDelete={handleDelete}/>
      </td>
    </tr>
  );
}
