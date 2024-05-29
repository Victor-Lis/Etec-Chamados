import { PersonType } from "./person";
import { TicketType } from "./ticket";

export type DeskType = {
  id: String;
  mesa: number;
  atendente_id?: String;
  Chamados?: TicketType[];
  Atendentes?: PersonType
};
