"use server";
import { DeskType } from "@/@types/desk";
import ButtonEdit from "@/components/ButtonEdit";
import ButtonExclude from "@/components/ButtonExclude";
import prisma from "@/lib/prisma";

export default async function TableRow({ desk }: { desk: DeskType }) {
  const formatNum = (n: number) => (n < 10 ? "0" + n : n);

  async function handleDelete() {
    "use server";

    await prisma.mesas.update({
      where: {
        id: desk.id,
      },
      data: {
        Atendente: {
          disconnect: true,
        },
        Chamados: {
          set: []
        },
      },
    });

    let status = await prisma.mesas
      .delete({
        where: {
          id: desk.id,
        },
      })
      .then(() => true)
      .catch(() => false);
    return status;
  }

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
        <ButtonExclude routeReplace="/mesas" handleDelete={handleDelete} />
      </td>
    </tr>
  );
}
