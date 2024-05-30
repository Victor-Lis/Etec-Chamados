import { PersonType } from "./person";
import { TicketType } from "./ticket";

export type DeskType = {
  id: string;
  mesa: number;
  atendente_id?: string | undefined;
  Chamados?: TicketType[];
  Atendente?: PersonType
};
