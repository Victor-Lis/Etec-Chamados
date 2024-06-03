import InternHeader from "@/components/InternHeader";
import Form from "./components/form";
import { isAuthorized } from "@/utils/isAuthorized";

export default async function Cadastrar() {
 await isAuthorized()
 return (
  <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
    <InternHeader title="Cadastrar Mesa" pathToReturn="/mesas"/>
    <Form/>
  </main>
 );
}