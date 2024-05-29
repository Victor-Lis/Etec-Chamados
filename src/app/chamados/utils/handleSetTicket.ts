import { TicketType } from "@/app/@types/ticket";
import { DataSnapshot } from "firebase/database";
import { Dispatch, SetStateAction } from "react";

export async function handleSetTicket({
  snapshot,
  setValue,
}: {
  snapshot: DataSnapshot;
  setValue: Dispatch<SetStateAction<TicketType[]>>;
}) {
  let snapshotVal = await snapshot.val();
  let response: TicketType[] = [];

  if (snapshotVal) {
    let keys: string[] = Object.keys(snapshotVal);
    let data: Omit<TicketType[], "key"> = Object.values(snapshotVal);

    keys.map((key, index) => {
      response.push({
        key,

        senha: data[index].senha as unknown as number,
        
        responsavel: data[index].responsavel as unknown as string,
        preferencial: data[index].preferencial as unknown as boolean,

        
        mesa: data[index].mesa as unknown as number, 
        atendente: data[index].atendente as unknown as string,

        atendido: data[index].atendido as unknown as boolean,

        date: data[index].date as unknown as Date,
        inicioHora: data[index].inicioHora as unknown as string,
        fimHora: data[index].fimHora as unknown as string
      });
    });
  }
  
  response.sort((a, b) => a.senha - b.senha)
  
  setValue(response);
}
