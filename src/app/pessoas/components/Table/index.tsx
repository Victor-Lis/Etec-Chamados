import { PersonType } from "@/app/@types/person";
import TableRow from "../TableRow";

export default function Table({people}:{people: PersonType[]}) {
  return (
    <table className="w-10/12 min-w-80 mx-auto my-5">
      <thead>
        <tr className="p-y-2 bg-slate-200 text-blue-600">
          <th className="font-medium text-left pl-1">Nome</th>
          <th className="font-medium text-left hidden sm:flex">Email</th>
          <th className="font-medium text-left">#</th>
        </tr>
      </thead>
      <tbody>
        {people?.map((person, index) => {
          return <TableRow key={person.key} person={person} />;
        })}
      </tbody>
    </table>
  );
}
