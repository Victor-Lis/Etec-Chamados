"use client";

import { DeskType } from "@/@types/desk";
import Loading from "@/components/Loading";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function Select({
  desks,
  setDesk,
}: {
  desks: DeskType[];
  setDesk: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      {!desks.length ? (
        <div className="border-b-2 border-b-gray-300 px-1 flex-1 flex justify-center pb-1">
          <Loading />
        </div>
      ) : (
        <select
          className="border-b-2 border-b-gray-300 px-1 flex-1"
          onChange={(e) => setDesk(e.target.value)}
        >
          <option></option>
          {desks?.map((desk) => {
            return (
              <option key={desk.id} value={desk.id}>
                {desk.mesa} - {desk.Atendente?.name}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}