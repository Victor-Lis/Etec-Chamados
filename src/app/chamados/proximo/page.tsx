import InternHeader from "@/components/InternHeader";
import Form from "./components/form";
import { getDesks } from "./utils/db";
import { isAuthorized } from "@/utils/isAuthorized";

export default async function Cadastrar() {

 await isAuthorized()

 let desks = await getDesks()

 return (
  <main className="flex items-center flex-col justify-start min-h-[calc(100vh-80px)]">
    <InternHeader title="Chamando Próximo" pathToReturn="/chamados"/>
    <Form mesas={desks}/>
  </main>
 );
}