import { TicketType } from "@/@types/ticket";

type TicketCardProps = {
  ticket: TicketType;
  last?: boolean;
};

export default function TicketCard({ ticket, last }: TicketCardProps) {
  return (
    <div
      className={`w-5/12 min-w-[300px] bg-white shadow-md px-5 py-2 mb-16 rounded border-[0.5px] ${
        !!last && "border-blue-600"
      }`}
    >
      <div className="flex w-full justify-between items-center mb-3">
        <h1 className="text-3xl">Senha</h1>
        <h1 className="text-3xl text-slate-500">{ticket.id}</h1>
      </div>
      <div className="flex max-[1000px]:flex-col w-full justify-between items-center">
        <h1 className="text-2xl">Responsável</h1>
        <h1 className="text-2xl text-slate-500">{ticket.responsavel}</h1>
      </div>
      {!!last && (
        <>
          <div className="flex max-[1000px]:flex-col w-full justify-between items-center mt-3 mb-3">
            <h1 className="text-2xl">Preferêncial</h1>
            <h1 className={`text-2xl ${ticket.preferencial ? "text-red-500" : "text-slate-500"}`}>
              {ticket.preferencial ? "Sim" : "Não"}
            </h1>
          </div>
          <div className="flex w-full justify-around items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl">Mesa</h1>
              <h1 className="text-2xl text-slate-500">{ticket.Mesa?.mesa}</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl">Atendente</h1>
              <h1 className="text-2xl text-slate-500"> {ticket.Mesa?.Atendente?.name} </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
