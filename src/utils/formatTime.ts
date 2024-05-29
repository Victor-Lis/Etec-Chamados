import { formatNum } from "./formatNum";
export const formatTime = (h: number, m: number) => `${formatNum(h)}:${formatNum(m)}`