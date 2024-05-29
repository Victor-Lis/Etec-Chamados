import InternHeader from "@/components/InternHeader";
import Form from "./components/form";

export default function Cadastrar() {
 return (
  <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
    <InternHeader title="Cadastrar Autorização" pathToReturn="/pessoas"/>
    <Form/>
  </main>
 );
}