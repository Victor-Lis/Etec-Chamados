import ButtonGoBack from "@/components/ButtonGoBack";
import ButtonCreate from "../ButtonCreate";

type HeaderProps = {
  title: string;
  routerPath?: string;
  pathToReturn?: string;
  subtitle?: React.ReactNode;
};

export default function InternHeader({
  title,
  routerPath,
  pathToReturn,
  subtitle,
}: HeaderProps) {
  return (
    <header className="w-10/12 min-w-80 mx-auto mt-5 flex flex-col justify-between">
      <div className="w-full flex justify-between items-center">
        <ButtonGoBack pathToReturn={pathToReturn} />
        <h1 className="text-lg font-semibold">{title}</h1>
        {!!routerPath ? <ButtonCreate routerPath={routerPath} /> : <span />}
      </div>
      {subtitle}
    </header>
  );
}
