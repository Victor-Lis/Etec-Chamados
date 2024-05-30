"use client";

import { PersonType } from "@/@types/person";
import Loading from "@/components/Loading";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function Select({
  people,
  setAtendente,
}: {
  people: PersonType[];
  setAtendente: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      {!people.length ? (
        <div className="border-b-2 border-b-gray-300 px-1 flex-1 flex justify-center pb-1">
          <Loading />
        </div>
      ) : (
        <select
          className="border-b-2 border-b-gray-300 px-1 flex-1"
          onChange={(e) => setAtendente(e.target.value)}
        >
          <option></option>
          {people?.map((person) => {
            return (
              <option key={person.nome} value={person.nome}>
                {person.nome}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}

// {!people.length ? (
//   <div className="border-b-2 border-b-gray-300 px-1 flex-1 flex justify-center pb-1">
//     <Loading/>
//   </div>
// ): (
//   <select
//     className="border-b-2 border-b-gray-300 px-1 flex-1"
//     onChange={(value) => console.log(value)}
//   >
//   {people?.map((person) => {
//     return (
//       <option key={person.nome} value={person.nome}>
//         {person.nome}
//       </option>
//     );
//   })}
//   </select>
// )}
