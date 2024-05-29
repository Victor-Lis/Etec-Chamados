import IconBox from "./components/IconBox";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiCabinet } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";

export default function Navigation() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100svh-(80px))]">
      <div className="flex justify-center items-center mb-14 w-full flex-wrap">
        <IconBox
          href="/pessoas"
          Icon={FaPeopleGroup}
          description="Autorizações"
        />
        <IconBox
          href="/mesas"
          Icon={BiCabinet}
          description="Mesas"
        />
        <IconBox
          href="/chamados"
          Icon={FiMonitor}
          description="Chamados"
        />
      </div>
    </main>
  );
}
