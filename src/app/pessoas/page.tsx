"use client";
import { useEffect, useState } from "react";

import { PersonType } from "../@types/person";

import Table from "./components/Table";
import InternHeader from "@/components/InternHeader";

import { onValue } from "firebase/database";
import { peopleRef } from "@/utils/firebaseConfig";
import { handleSetPeople } from "./utils/handleSetPeople";

export default function Pessoas() {
  const [people, setPeople] = useState<PersonType[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(peopleRef, (snapshot) => {
      handleSetPeople({ snapshot: snapshot, setValue: setPeople });
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
      <InternHeader
        title="Pessoas Autorizadas"
        pathToReturn="/navegacao "
        routerPath="/pessoas/cadastrar"
      />
      <Table people={people} />
    </main>
  );
}
 