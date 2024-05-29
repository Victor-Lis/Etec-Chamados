import { AiOutlineLoading3Quarters } from "react-icons/ai";

type LoadingProps = {
    size?: number;
    color?: string;
}

export default function Loading({size, color}: LoadingProps) {
 return <AiOutlineLoading3Quarters className="animate-spin" size={size ? size : 20} color={color ? color : "#686868"}/>;
}