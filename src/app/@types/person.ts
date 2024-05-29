import { DeskType } from "./desk";

export type PersonType = {
  id: String;
  name: String;
  email: String;
  Mesas?: DeskType[];
};
