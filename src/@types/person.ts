import { DeskType } from "./desk";

export type PersonType = {
  id: string;
  name: string;
  email: string;
  Mesas?: DeskType[];
};
