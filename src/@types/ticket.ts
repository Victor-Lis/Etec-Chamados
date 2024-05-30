import { DeskType } from "./desk";

export type TicketType = {
    id: number;
    time_start: Date;
    time_end?: Date;
    preferencial: Boolean
    atendido: Boolean
    Mesa: DeskType
    mesa_id?: String
  }
  