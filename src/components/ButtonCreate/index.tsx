"use client";

import { FiPlusCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ButtonCreate({routerPath}:{routerPath: string}) {
  const router = useRouter();
  return (
    <FiPlusCircle
      className="hover:scale-110 hover:shadow-2xl duration-300 cursor-pointer"
      size={30}
      color="#00ff11"
      onClick={() => router.push(routerPath)}
    />
  );
}
