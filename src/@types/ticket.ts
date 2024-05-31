import { DeskType } from "./desk";

export type TicketType = {
    id: number;
    time_start: Date;
    time_end?: Date;
    preferencial: boolean
    atendido: boolean
    Mesa: DeskType
    mesa_id?: string
    responsavel: string
  }
  